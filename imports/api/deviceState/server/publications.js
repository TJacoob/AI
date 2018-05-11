// All links-related publications

import { Meteor } from 'meteor/meteor';
import { DeviceState } from '../deviceState.js';

Meteor.publish('DeviceState.all', function () {
	return DeviceState.find({});
});
