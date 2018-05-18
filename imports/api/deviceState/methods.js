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
});
