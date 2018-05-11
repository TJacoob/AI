// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ScalarValueType } from './scalarValueType.js';

Meteor.methods({
 	newScalarValue: function(id, name, numbits, units, minvalue, maxvalue, step)
 	{
 		if ( ScalarValueType.find({'ID':id}).count() == 0 )		// Unique ID's
 			ScalarValueType.insert({ID:id, name:name, numbits:numbits, units:units, minValue:minvalue, maxValue:maxvalue, step:step});
 	}
});
