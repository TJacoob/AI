// All links-related publications

import { Meteor } from 'meteor/meteor';
import { ScalarValueType } from '../scalarValueType.js';

Meteor.publish('ScalarValueType.all', function () {
	return ScalarValueType.find({});
});
