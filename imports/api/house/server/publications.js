// All links-related publications

import { Meteor } from 'meteor/meteor';
import { House } from '../house.js';

Meteor.publish('House.all', function () {
	return House.find({});
});
