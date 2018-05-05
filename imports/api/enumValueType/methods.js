// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { EnumValueType } from './enumValueType.js';

Meteor.methods({
 	newEnumValue: function(id, name, enumerated)
 	{
 		if ( EnumValueType.find({'ID':id}).count() == 0 )		// Unique ID's
 			EnumValueType.insert({ID:id, name:name, enumeratedList:enumerated});
 	}
});
