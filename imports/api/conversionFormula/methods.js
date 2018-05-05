// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ConversionFormula } from './conversionFormula.js';

Meteor.methods({
 	newConversionFormula: function(id, name, userToSystem, systemToUser, decimal)
 	{
 		ConversionFormula.insert({ID:id, name:name, userToSystem:userToSystem, systemToUser:systemToUser, decimal:decimal });
 	}
});
