// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Property } from './property.js';

Meteor.methods({
 	newProperty: function(id, name, accessMode, valueType, refValueType)
 	{
 		Property.insert({ID:id, name:name, accessMode:accessMode, valueType:valueType, refValueType:refValueType });
 	}
});
