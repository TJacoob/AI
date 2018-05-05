// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ConversionObject } from './conversionObject.js';

Meteor.methods({
 	newConversionObject: function(id, name, userToSystem, systemToUser, decimal)
 	{
 		ConversionObject.insert({ID:id, name:name, userToSystem:userToSystem, systemToUser:systemToUser, decimal:decimal });
 	}
});
