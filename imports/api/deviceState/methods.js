// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { DeviceState } from './deviceState.js';

Meteor.methods({
 	newDeviceState: function(refDevice, refProperty, value, invalidValue)
 	{
 		if ( DeviceState.find({'refDevice':refDevice}).count() == 0 && DeviceState.find({'refProperty':refProperty}).count() == 0  )		// Unique
 			DeviceState.insert({refDevice:refDevice, refProperty:refProperty, value:value, invalidValue:invalidValue});
 	}
});
