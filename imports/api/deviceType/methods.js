// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { DeviceType } from './deviceType.js';

Meteor.methods({
 	newDeviceType: function(id, name, refDeviceClass, description, propertyList)
 	{
 		DeviceType.insert({ID:id, name:name, refDeviceClass:refDeviceClass, description:description, propertyList:propertyList });
 	}
});
