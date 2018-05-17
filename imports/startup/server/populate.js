
import { Enumerated } from '../../api/enumerated/enumerated.js';
import { EnumValueType } from '../../api/enumValueType/enumValueType.js';
import { ScalarValueType } from '../../api/scalarValueType/scalarValueType.js';
import { Property } from '../../api/property/property.js';
import { DeviceType } from '../../api/deviceType/deviceType.js';

Meteor.startup(() => {

	let callResponse = '<DomoBusSystem ID="1" Name="ExampleSystem" Type="#.#" Version="#.#" Date="x">    <EnumValueTypeList>        <EnumValueType ID="1" Name="On-Off">            <Enumerated Name="On" Value="1" />            <Enumerated Name="Off" Value="0" />        </EnumValueType>        <EnumValueType ID="2" Name="Canal">            <Enumerated Name="RTP 1" Value="1" />            <Enumerated Name="RTP 2" Value="2" />            <Enumerated Name="SIC" Value="3" />            <Enumerated Name="TVI" Value="4" />        </EnumValueType>        <EnumValueType ID="3" Name="Estação">            <Enumerated Name="RFM" Value="1" />            <Enumerated Name="Orbital" Value="2" />            <Enumerated Name="Comercial" Value="3" />            <Enumerated Name="Antena 1" Value="4" />        </EnumValueType>        <EnumValueType ID="4" Name="Lock">            <Enumerated Name="Open" Value="1" />            <Enumerated Name="Closed" Value="0" />        </EnumValueType>    </EnumValueTypeList>    <ScalarValueTypeList>        <ScalarValueType ID="1" Name="Temp Air" NumBits="8" Units="Cº" MinValue="-20" MaxValue="50" Step="2">        </ScalarValueType>        <ScalarValueType ID="2" Name="Temp Oven" NumBits="8" Units="Cº" MinValue="0" MaxValue="300" Step="10">        </ScalarValueType>        <ScalarValueType ID="3" Name="Temp Fridge" NumBits="8" Units="Cº" MinValue="-15" MaxValue="15" Step="1">        </ScalarValueType>        <ScalarValueType ID="4" Name="Intensity" NumBits="8" Units="%" MinValue="0" MaxValue="100" Step="5">        </ScalarValueType>        <ScalarValueType ID="5" Name="Volume" NumBits="8" Units="Cº" MinValue="0" MaxValue="25" Step="1">        </ScalarValueType>    </ScalarValueTypeList>    <DeviceTypeList>        <DeviceType ID="1" Name="Light" RefDeviceClass="1" Description="Light Switch">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />            </PropertyList>        </DeviceType>        <DeviceType ID="2" Name="Adjustable Light" RefDeviceClass="1" Description="Adjustable Light with Switch and Intensity">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Intensity" AccessMode="RW" ValueType="SCALAR" RefValueType="4" />            </PropertyList>        </DeviceType>        <DeviceType ID="3" Name="Heater" RefDeviceClass="1" Description="Regular Heater">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Temp Air" AccessMode="RW" ValueType="SCALAR" RefValueType="1" />            </PropertyList>        </DeviceType>        <DeviceType ID="4" Name="Oven" RefDeviceClass="1" Description="Oven">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Temp Oven" AccessMode="RW" ValueType="SCALAR" RefValueType="2" />            </PropertyList>        </DeviceType>        <DeviceType ID="5" Name="Fridge" RefDeviceClass="1" Description="Fridge">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Temp Fridge" AccessMode="RW" ValueType="SCALAR" RefValueType="3" />            </PropertyList>        </DeviceType>        <DeviceType ID="6" Name="TV" RefDeviceClass="1" Description="Television">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Canal" AccessMode="RW" ValueType="ENUM" RefValueType="2" />                <Property ID="3" Name="Volume" AccessMode="RW" ValueType="SCALAR" RefValueType="5" />            </PropertyList>        </DeviceType>        <DeviceType ID="7" Name="Radio" RefDeviceClass="1" Description="Radio">            <PropertyList>                <Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" />                <Property ID="2" Name="Station" AccessMode="RW" ValueType="ENUM" RefValueType="3" />                <Property ID="3" Name="Volume" AccessMode="RW" ValueType="SCALAR" RefValueType="5" />            </PropertyList>        </DeviceType>        <DeviceType ID="8" Name="Lock" RefDeviceClass="1" Description="Radio">            <PropertyList>                <Property ID="1" Name="Lock" AccessMode="RW" ValueType="ENUM" RefValueType="4" />            </PropertyList>        </DeviceType>        <DeviceType ID="9" Name="Thermometer" RefDeviceClass="1" Description="Air Thermometer">            <PropertyList>                <Property ID="1" Name="Thermometer" AccessMode="RO" ValueType="SCALAR" RefValueType="1" />            </PropertyList>        </DeviceType>    </DeviceTypeList>    <House ID="1" Name="SampleHouse" Address="ExampleStreet" Phone="123">        <FloorList>            <Floor ID="1" Name="Garage" HeightOrder="-1"/>            <Floor ID="2" Name="Ground Floor" HeightOrder="0"/>            <Floor ID="3" Name="Bedrooms" HeightOrder="1"/>        </FloorList>        <DivisionList>            <Division ID="1" Name="Garage" RefFloor="1" AccessLevel="1" />            <Division ID="2" Name="Living Room" RefFloor="2" AccessLevel="1" />            <Division ID="3" Name="Kitchen" RefFloor="2" AccessLevel="1" />            <Division ID="4" Name="Office" RefFloor="2" AccessLevel="1" />            <Division ID="5" Name="Bathroom" RefFloor="2" AccessLevel="1" />            <Division ID="6" Name="Master Bedroom" RefFloor="3" AccessLevel="1" />            <Division ID="7" Name="Guest Room" RefFloor="3" AccessLevel="1" />            <Division ID="8" Name="Bathroom" RefFloor="3" AccessLevel="1" />        </DivisionList>    </House>    <DeviceList>        <Device ID="1" RefDeviceType="1" Name="Garage Light" Address="http://localhost/" RefDivision="1" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="2" RefDeviceType="1" Name="Living Room Light" Address="http://localhost/" RefDivision="2" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="3" RefDeviceType="6" Name="Living Room TV" Address="http://localhost/" RefDivision="2" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="4" RefDeviceType="3" Name="Living Room Air Conditioning" Address="http://localhost/" RefDivision="2" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="5" RefDeviceType="8" Name="Main Entrance Lock" Address="http://localhost/" RefDivision="2" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="6" RefDeviceType="9" Name="Living Room Temperature" Address="http://localhost/" RefDivision="2" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="7" RefDeviceType="1" Name="Kitchen Light" Address="http://localhost/" RefDivision="3" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="8" RefDeviceType="5" Name="Fridge" Address="http://localhost/" RefDivision="3" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="9" RefDeviceType="1" Name="Roomba" Address="http://localhost/" RefDivision="3" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="10" RefDeviceType="4" Name="Oven" Address="http://localhost/" RefDivision="3" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="11" RefDeviceType="2" Name="Office Light" Address="http://localhost/" RefDivision="4" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="12" RefDeviceType="7" Name="Office Radio" Address="http://localhost/" RefDivision="4" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="13" RefDeviceType="1" Name="Bathroom Light" Address="http://localhost/" RefDivision="5" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="14" RefDeviceType="3" Name="Bathroom Heater" Address="http://localhost/" RefDivision="5" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="15" RefDeviceType="9" Name="Bathroom Temperature" Address="http://localhost/" RefDivision="5" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="16" RefDeviceType="2" Name="Bedroom Light" Address="http://localhost/" RefDivision="6" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="17" RefDeviceType="3" Name="Bedroom Heater" Address="http://localhost/" RefDivision="6" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="18" RefDeviceType="1" Name="Bedroom Light" Address="http://localhost/" RefDivision="7" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="19" RefDeviceType="3" Name="Bedroom Heater" Address="http://localhost/" RefDivision="7" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="20" RefDeviceType="1" Name="Bathroom Light" Address="http://localhost/" RefDivision="8" AccessLevel="1,1" UserBlocked="1,1"></Device>        <Device ID="21" RefDeviceType="3" Name="Bathroom Heater" Address="http://localhost/" RefDivision="8" AccessLevel="1,1" UserBlocked="1,1"></Device>    </DeviceList>    <DeviceStateList>        <DeviceState RefDevice="1" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="2" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="3" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="3" RefProperty="2" Value="1" InvalidValue="False" />        <DeviceState RefDevice="3" RefProperty="3" Value="10" InvalidValue="False" />        <DeviceState RefDevice="4" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="4" RefProperty="2" Value="25" InvalidValue="False" />        <DeviceState RefDevice="5" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="6" RefProperty="1" Value="22" InvalidValue="False" />        <DeviceState RefDevice="7" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="8" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="8" RefProperty="2" Value="5" InvalidValue="False" />        <DeviceState RefDevice="9" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="10" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="10" RefProperty="2" Value="200" InvalidValue="False" />        <DeviceState RefDevice="11" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="11" RefProperty="2" Value="50" InvalidValue="False" />        <DeviceState RefDevice="12" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="12" RefProperty="2" Value="2" InvalidValue="False" />        <DeviceState RefDevice="12" RefProperty="3" Value="15" InvalidValue="False" />        <DeviceState RefDevice="13" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="14" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="14" RefProperty="2" Value="25" InvalidValue="False" />        <DeviceState RefDevice="15" RefProperty="1" Value="22" InvalidValue="False" />        <DeviceState RefDevice="16" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="16" RefProperty="2" Value="50" InvalidValue="False" />        <DeviceState RefDevice="17" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="17" RefProperty="2" Value="25" InvalidValue="False" />        <DeviceState RefDevice="18" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="19" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="19" RefProperty="2" Value="25" InvalidValue="False" />        <DeviceState RefDevice="20" RefProperty="1" Value="0" InvalidValue="False" />        <DeviceState RefDevice="21" RefProperty="1" Value="1" InvalidValue="False" />        <DeviceState RefDevice="21" RefProperty="2" Value="25" InvalidValue="False" />    </DeviceStateList></DomoBusSystem>';
	xml2js.parseString(callResponse, function (jsError, jsResult) {

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

	});
});