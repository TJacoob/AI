// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { DeviceType } from './deviceType.js';

Meteor.methods({
 	newDeviceType: function(id, name, refDeviceClass, description, propertyList)
 	{
 		if ( DeviceType.find({'ID':id}).count() == 0 )		// Unique ID's
 			DeviceType.insert({ID:id, name:name, refDeviceClass:refDeviceClass, description:description, propertyList:propertyList });
 	}
});
