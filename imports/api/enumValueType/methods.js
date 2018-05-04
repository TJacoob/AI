// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { EnumValueType } from './enumValueType.js';

Meteor.methods({
 	newEnumValue: function(id, name, enumerated)
 	{
 		EnumValueType.insert({ID:id, name:name, enumerated:enumerated});
 	}
});
