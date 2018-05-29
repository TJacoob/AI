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

 		HTTP.call( 'GET', device.address+"/?prop="+refProperty+"/?val="+newValue, {}, function( error, response ) {
			if ( error ) {
				console.log( error );
			} else {
				//console.log( response.content );
				DeviceState.update( deviceState._id , { $set: { value: response.content }});
			}
		});	
 	}
});
