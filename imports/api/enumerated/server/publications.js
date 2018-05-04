// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Enumerated } from '../enumerated.js';

Meteor.publish('Enumerated.all', function () {
	return Enumerated.find({});
});
