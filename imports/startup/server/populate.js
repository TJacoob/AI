
import { Enumerated } from '../../api/enumerated/enumerated.js';
import { EnumValueType } from '../../api/enumValueType/enumValueType.js';
import { ScalarValueType } from '../../api/scalarValueType/scalarValueType.js';
import { Property } from '../../api/property/property.js';
import { DeviceType } from '../../api/deviceType/deviceType.js';
import { DeviceState } from '../../api/deviceState/deviceState.js';

Meteor.methods({
    populate: function()
    {
        let callResponse = HTTP.get("http://localhost:3000/house.xml");
        //console.log(callResponse.content);
        xml2js.parseString(callResponse.content, function (jsError, jsResult) {

            //console.log(jsResult['DomoBusSystem']['$']);

            // Scalar Value Types
            if ( jsResult['DomoBusSystem']['ScalarValueTypeList'] != null )
            {
                console.log("Parsing Scalar Value Types");
                for ( svt in jsResult['DomoBusSystem']['ScalarValueTypeList'][0]['ScalarValueType'] )
                {
                    //console.log(evt);
                    let obj = jsResult['DomoBusSystem']['ScalarValueTypeList'][0]['ScalarValueType'][svt];
                    Meteor.call('newScalarValue', parseInt(obj['$']['ID']), obj['$']['Name'], parseInt(obj['$']['NumBits']), obj['$']['Units'], parseInt(obj['$']['MinValue']), parseInt(obj['$']['MaxValue']), parseInt(obj['$']['Step']) );
                }
            }

            // Enum Value Types
            if ( jsResult['DomoBusSystem']['EnumValueTypeList'] != null )
            {
                console.log("Parsing Enum Value Types");
                for ( evt in jsResult['DomoBusSystem']['EnumValueTypeList'][0]['EnumValueType'] )
                {
                    //console.log(evt);
                    let obj = jsResult['DomoBusSystem']['EnumValueTypeList'][0]['EnumValueType'][evt];
                    //console.log(obj['Enumerated']);
                    let enumerated = [];
                    for ( en in obj['Enumerated'] )
                        enumerated.push({
                                name: obj['Enumerated'][en]['$']['Name'],
                                value: obj['Enumerated'][en]['$']['Value']
                            });
                    //console.log(enumerated);

                    Meteor.call('newEnumValue', parseInt(obj['$']['ID']), obj['$']['Name'], enumerated );
                }
            }

            // Device Type
            if ( jsResult['DomoBusSystem']['DeviceTypeList'] != null )
            {
                console.log("Parsing Device Types");
                for ( index in jsResult['DomoBusSystem']['DeviceTypeList'][0]['DeviceType'] )
                {
                    //console.log(evt);
                    let obj = jsResult['DomoBusSystem']['DeviceTypeList'][0]['DeviceType'][index];
                    //console.log(obj['PropertyList']);
                    //console.log(obj['Enumerated']);
                    let properties = [];
                    for ( en in obj['PropertyList'][0]['Property'] )
                    {
                        let prop = obj['PropertyList'][0]['Property'][en]['$'];
                        //console.log(prop);
                        let parsedProp = {"ID":parseInt(prop['ID']), "name":prop['Name'], "accessMode": prop['AccessMode'], "valueType": prop['ValueType'], "refValueType":parseInt(prop['RefValueType'])}
                        //Meteor.call('newProperty', parseInt(prop['ID']), prop['Name'], prop['AccessMode'], prop['ValueType'], parseInt(prop['RefValueType'])  )
                        properties.push(parsedProp);
                    }
                    //console.log(properties);

                    Meteor.call('newDeviceType', parseInt(obj['$']['ID']), obj['$']['Name'], obj['$']['RefDeviceClass'], obj['$']['Description'], properties );
                }
            }
            
            //Devices
            if ( jsResult['DomoBusSystem']['DeviceList'] != null )
            {
                console.log("Parsing Devices");
                for ( dev in jsResult['DomoBusSystem']['DeviceList'][0]['Device'] )
                {
                    //console.log(evt);
                    let obj = jsResult['DomoBusSystem']['DeviceList'][0]['Device'][dev];
                    //console.log(obj);
                    let AccessLevel = obj['$']['AccessLevel'].split(',');
                    let UserBlocked = obj['$']['UserBlocked'].split(',');
                    //console.log(obj['$']['Address']);
                    Meteor.call('newDevice', parseInt(obj['$']['ID']), obj['$']['Name'], parseInt(obj['$']['RefDeviceType']), obj['$']['Address'], parseInt(obj['$']['RefDivision']), [AccessLevel[0], AccessLevel[1]], [UserBlocked[0], UserBlocked[1]] );
                }
            }       

            //Device States
            if ( jsResult['DomoBusSystem']['DeviceStateList'] != null )
            {
                console.log("Parsing Device State");
                for ( dev in jsResult['DomoBusSystem']['DeviceStateList'][0]['DeviceState'] )
                {
                    //console.log(evt);
                    let obj = jsResult['DomoBusSystem']['DeviceStateList'][0]['DeviceState'][dev];
                    //console.log(obj);
                    var invalidValue = (obj['$']['InvalidValue'] == 'True');
                    Meteor.call('newDeviceState', parseInt(obj['$']['RefDevice']), parseInt(obj['$']['RefProperty']), parseInt(obj['$']['Value']), invalidValue  );
                }
            }

            // Houses
            if ( jsResult['DomoBusSystem']['House'] != null )
            {
                console.log("Parsing House");
                const floors = [];
                for ( floor in jsResult['DomoBusSystem']['House'][0]['FloorList'][0]['Floor'] )
                {
                    let f = jsResult['DomoBusSystem']['House'][0]['FloorList'][0]['Floor'][floor]['$']
                    floors.push(parseInt(f['ID']));
                    Meteor.call('newFloor', parseInt(f['ID']), f['Name'], parseInt(f['HeightOrder']));
                }
                const divisions = [];
                for ( division in jsResult['DomoBusSystem']['House'][0]['DivisionList'][0]['Division'] )
                {
                    let d = jsResult['DomoBusSystem']['House'][0]['DivisionList'][0]['Division'][division]['$']
                    divisions.push(parseInt(d['ID']));
                    Meteor.call('newDivision', parseInt(d['ID']), d['Name'], parseInt(d['RefFloor']), d['AccessLevel']);
                }

                let h = jsResult['DomoBusSystem']['House'][0]['$'];
                Meteor.call('newHouse', parseInt(h['ID']), h['Name'], h['Address'], h['Phone'], floors, divisions );
                
            }        

            // Specific for Demonstration, remove afterwards:
            if ( DeviceState.find({"refDevice":6,"refProperty":1}).count() == 1)
            {
                Meteor.call('changeDeviceValue', 6,1, 0);   
            }

        });
    }
});

