// All links-related publications

import { Meteor } from 'meteor/meteor';
import { EnumValueType } from '../enumValueType.js';

Meteor.publish('EnumValueType.all', function () {
	return EnumValueType.find();
});
