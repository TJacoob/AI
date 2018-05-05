
import { Enumerated } from '../../api/enumerated/enumerated.js';
import { EnumValueType } from '../../api/enumValueType/enumValueType.js';
import { ScalarValueType } from '../../api/scalarValueType/scalarValueType.js';
import { Property } from '../../api/property/property.js';
import { DeviceType } from '../../api/deviceType/deviceType.js';



Meteor.startup(() => {

	let callResponse = '<EnumValueTypeList><EnumValueType ID="1" Name="On-Off"><Enumerated Name="Off" Value="0" /><Enumerated Name="On" Value="1" /></EnumValueType><EnumValueType ID="2" Name="Intensity"><Enumerated Name="Low" Value="0" /><Enumerated Name="Medium" Value="1" /><Enumerated Name="High" Value="2" />	</EnumValueType></EnumValueTypeList><DeviceTypeList><DeviceType ID="1" Name="Switch1" RefDeviceClass="1" Description="Switch number 1"><PropertyList><Property ID="1" Name="On-Off" AccessMode="RW" ValueType="ENUM" RefValueType="1" /></PropertyList></DeviceType></DeviceTypeList>';
	xml2js.parseString(callResponse, function (jsError, jsResult) {
    	//console.error('errors',jsError);
    	//console.log(jsResult['EnumValueTypeList']['EnumValueType']);

    	if ( jsResult['EnumValueTypeList'] != null )
    	{
    		for ( evt in jsResult['EnumValueTypeList']['EnumValueType'] )
    		{
    			//console.log(evt);
    			let obj = jsResult['EnumValueTypeList']['EnumValueType'][evt];
    			//console.log(obj['Enumerated']);
    			let enumerated = [];
    			for ( en in obj['Enumerated'] )
    				enumerated.push({
    						name: obj['Enumerated'][en]['$']['Name'],
    						value: obj['Enumerated'][en]['$']['Value']
    					});
    			//console.log(enumerated);

    			Meteor.call('newEnumValue', obj['$']['ID'], obj['$']['Name'], enumerated );
    		}
    	}
    	
    	/*
    	jsResult.ScalarValueTypeList.each( function(svt)
    	{
    		console.log(svt);
    	});
    	*/
	});

	

  	// if the Links collection is empty
  	/*
  	if (EnumValueType.find().count() == 0) {
	    const enum1 = { 
			name:"On",
			value: 1,
		}

		const enum2 = { 
			name:"Off",
			value: 0,
		}

		const valuetype1 = {
			ID:1,
			name:"On-Off",
			enumeratedList: [ enum2, enum1 ]
		}

		EnumValueType.insert(valuetype1);
	}

	if (ScalarValueType.find().count() == 0) {
		const scalar1 = {
			ID:1,
			name:"Percentage",
			numbits: 8,
			units:"%",
			minValue: 0,
			maxValue: 100,
			step: 1,
			conversion: 
			{
				type:"OBJECT",
				ref: 1
			}
		}

		ScalarValueType.insert(scalar1);
	}

	if (Property.find().count() == 0) {
		const property1 = {
			ID:1,
			name:"On-Off",
			accessMode:"RW",
			valueType:"ENUM",
			refValueType:1
		}

		const property2 = {
			ID:2,
			name:"Intensity",
			accessMode:"RW",
			valueType:"SCALAR",
			refValueType:1
		}

		Property.insert(property1);
		Property.insert(property2);
	}

	if (DeviceType.find().count() == 0) {
		const deviceType1 = {
			ID:1,
			name:"Light",
			refDeviceClass:1,
			description:"Test Device Type",
			propertyList: [1,2]
		}

		DeviceType.insert(deviceType1);
	}
	*/
});