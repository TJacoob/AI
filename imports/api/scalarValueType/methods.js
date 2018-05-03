// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ScalarValueType } from './scalarValueType.js';

Meteor.methods({
 	newScalar: function(id, name, numbits, units, minvalue, maxvalue, step)
 	{
 		ScalarValueType.insert({ID:id, name:name, numbits:numbits, units:units, minValue:minvalue, maxValue:maxvalue, step:step});
 	}
});
