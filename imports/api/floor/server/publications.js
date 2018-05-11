// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Floor } from '../floor.js';

Meteor.publish('Floor.all', function () {
	return Floor.find({});
});
