// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Floor } from './floor.js';

Meteor.methods({
 	newFloor: function(id, name, heightOrder)
 	{
 		if ( Floor.find({'ID':id}).count() == 0 )		// Unique ID's
 			Floor.insert({ID:id, name:name, heightOrder:heightOrder });
 	}
});
