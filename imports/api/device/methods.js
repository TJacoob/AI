// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Device } from './device.js';
import { DeviceType } from '../deviceType/deviceType.js';
import { DeviceState } from '../deviceState/deviceState.js';

Meteor.methods({
 	newDevice: function(id, name, refDeviceType, address, refDivision, accessLevel, userBlocked)
 	{
 		if ( Device.find({'ID':id}).count() == 0 )		// Unique ID's
 			Device.insert({ID:id, name:name, refDeviceType:refDeviceType, address:address, refDivision:refDivision, accessLevel:accessLevel, userBlocked:userBlocked });
 	},
 	addDevice: function(name, refDeviceType, address, refDivision)
 	{
 		let id = Device.find({}).count() + 1;
 		let accessLevel = [1,1];
 		let userBlocked = [1,1];
		Device.insert({ID:id, name:name, refDeviceType:refDeviceType, address:address, refDivision:refDivision, accessLevel:accessLevel, userBlocked:userBlocked });
		
		// Create Device State for the new Device
		let propertyList = DeviceType.findOne({"ID":refDeviceType}).propertyList;
		for ( prop=0; prop<propertyList.length; prop++)
		{
			DeviceState.insert({refDevice:id, refProperty:propertyList[prop], value:0, invalidValue:false});
		}
 	}
});
