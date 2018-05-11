// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { House } from './house.js';

Meteor.methods({
 	newHouse: function(id, name, address, phone, floors, divisions)
 	{
 		if ( House.find({'ID':id}).count() == 0 )		// Unique ID's
 			House.insert({ID:id, name:name, address:address, phone:phone, floors:floors, divisions:divisions });
 	}
});
