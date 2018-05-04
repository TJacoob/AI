// All links-related publications

import { Meteor } from 'meteor/meteor';
import { DeviceType } from '../deviceType.js';

Meteor.publish('DeviceType.all', function () {
	return DeviceType.find({});
});
