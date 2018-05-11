// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Division } from './division.js';

Meteor.methods({
 	newDivision: function(id, name, refFloor, accessLevel)
 	{
 		if ( Division.find({'ID':id}).count() == 0 )		// Unique ID's
 			Division.insert({ID:id, name:name, refFloor:refFloor, accessLevel:accessLevel });
 	}
});
