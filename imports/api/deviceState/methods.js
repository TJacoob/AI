// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { DeviceState } from './deviceState.js';
import { Device } from '../device/device.js';

Meteor.methods({
 	newDeviceState: function(refDevice, refProperty, value, invalidValue)
 	{
 		if (DeviceState.find({"refDevice":refDevice, "refProperty":refProperty}).count() == 0 )
			DeviceState.insert({refDevice:refDevice, refProperty:refProperty, value:value, invalidValue:invalidValue});
 	},

 	changeDeviceValue: function( refDevice, refProperty, newValue )
 	{
 		const deviceState = DeviceState.findOne({"refDevice":refDevice, "refProperty":refProperty});
 		const device = Device.findOne({"ID": refDevice});

 		// If device specified
 		if ( refDevice == 7 )		// Kitchen Light
 		{
 			HTTP.call( 'GET', device.address+"?val="+newValue, {}, function( error, response ) {
				if ( error ) {
					console.log( error );
				} else {
					//console.log( response.content );
					DeviceState.update( deviceState._id , { $set: { value: response.content }});
				}
			});	
 		}
 		if ( refDevice == 6 )		// Temperature Sensor
 		{
 			console.log("updated temperature")
 			HTTP.call( 'GET', device.address+"/temp", {}, function( error, response ) {
				if ( error ) {
					console.log( error );
				} else {
					//console.log( response.content );
					DeviceState.update( deviceState._id , { $set: { value: response.content }});
				}
			});	
 		}
 		if ( refDevice == 12 )		// Radio
 		{
 			//console.log("Radio");
 			if ( refProperty == 1 )
 			{
 				HTTP.call( 'GET', device.address+"toggle?val="+newValue, {}, function( error, response ) {
				if ( error ) {
					console.log( error );
				} else {
					//console.log( response.content );
					DeviceState.update( deviceState._id , { $set: { value: response.content }});
				}
				});	
 			}
 			else if ( refProperty == 3 )
 			{
 				HTTP.call( 'GET', device.address+"volume?val="+newValue, {}, function( error, response ) {
				if ( error ) {
					console.log( error );
				} else {
					//console.log( response.content );
					DeviceState.update( deviceState._id , { $set: { value: response.content }});
				}
				});	
 			}
 			else if ( refProperty == 2 )
 			{
 				/*
 				HTTP.call( 'GET', device.address+"volume?val="+newValue, {}, function( error, response ) {
				if ( error ) {
					console.log( error );
				} else {
					DeviceState.update( deviceState._id , { $set: { value: response.content }});
				}
				});	*/
 			}
 		}
 		else if ( refDevice == 11 )		// Intensity Light
 		{
 			if ( refProperty == 1 && newValue == 0 )
 			{
 				console.log("turn off");
 				HTTP.call( 'GET', device.address+"?val=0", {}, function( error, response ) {if ( error ) {console.log( error );} else {	console.log(response.content);DeviceState.update( deviceState._id , { $set: { value: response.content }});}});	
 				//HTTP.call( 'GET', device.address+"?val=", {}, function( error, response ) {if ( error ) {console.log( error );} else {	DeviceState.update( deviceState._id , { $set: { value: newValue }});}});	
 			}
 			if ( refProperty == 1 && newValue == 1 )
 			{
 				console.log("turn on")
 				let newValue = DeviceState.findOne({"refDevice":11, "refProperty":2}).value;
 				let value = 0;
	 				if ( newValue == 0)
	 					value = 0;
	 				if ( newValue > 0 && newValue < 33 )
	 					value = 1;
	 				else if ( newValue >= 33 && newValue < 66 )
	 					value = 2;
	 				else if ( newValue >= 66 && newValue <= 100 )
	 					value = 3;
 				console.log(value);
 				HTTP.call( 'GET', device.address+"?val="+value, {}, function( error, response ) {if ( error ) {console.log( error );} else {	console.log(response.content);if(newValue>1) newValue=1;DeviceState.update( deviceState._id , { $set: { value: newValue }});}});	
 				//HTTP.call( 'GET', device.address+"?val="+value, {}, function( error, response ) {if ( error ) {console.log( error );} else {	DeviceState.update( deviceState._id , { $set: { value: newValue }});}});	
 			}
 			if ( refProperty == 2)
 			{
 				let on = DeviceState.findOne({"refDevice":11, "refProperty":1}).value;
 				if ( on==1 )
 				{
	 				let value = 0;
	 				if ( newValue == 0)
	 					value = 0;
	 				if ( newValue > 0 && newValue < 33 )
	 					value = 1;
	 				else if ( newValue >= 33 && newValue < 66 )
	 					value = 2;
	 				else if ( newValue >= 66 && newValue <= 100 )
	 					value = 3;
					console.log("change intensity: "+value); 				
	 				HTTP.call( 'GET', device.address+"?val="+value, {}, function( error, response ) {if ( error ) {console.log( error );} else {	DeviceState.update( deviceState._id , { $set: { value: newValue }});}});	
	 			}
 			}
 		}
 		else
 		{
 			HTTP.call( 'GET', device.address, {}, function( error, response ) {
				if ( error ) {
					console.log( error );
					//DeviceState.update( deviceState._id , { $set: { value: newValue }});
				} else {
					//console.log( response.content );
					// If sério 
						//DeviceState.update( deviceState._id , { $set: { value: response.content }});
					// If not sério
						DeviceState.update( deviceState._id , { $set: { value: newValue }});
					/*
					This will return the HTTP response object that looks something like this:
					{
					content: "String of content...",
					data: Array[100], <-- Our actual data lives here. 
					headers: {  Object containing HTTP response headers }
					statusCode: 200
					}
					*/
				}
			});
 		}
 	}
});
