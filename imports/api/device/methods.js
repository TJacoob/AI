// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Device } from './device.js';

Meteor.methods({
 	newDevice: function(id, name, refDeviceType, address, refDivision, accessLevel, userBlocked)
 	{
 		if ( Device.find({'ID':id}).count() == 0 )		// Unique ID's
 			Device.insert({ID:id, name:name, refDeviceType:refDeviceType, address:address, refDivision:refDivision, accessLevel:accessLevel, userBlocked:userBlocked });
 	}
});
