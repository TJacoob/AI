// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Device } from '../device.js';

Meteor.publish('Device.all', function () {
	return Device.find({});
});
