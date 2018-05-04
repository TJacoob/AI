// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Property } from '../scalarValueType.js';

Meteor.publish('property.all', function () {
	return Property.find({});
});
