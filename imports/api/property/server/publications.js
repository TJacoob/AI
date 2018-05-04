// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Property } from '../property.js';

Meteor.publish('Property.all', function () {
	return Property.find({});
});
