// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Division } from '../division.js';

Meteor.publish('Division.all', function () {
	return Division.find({});
});
