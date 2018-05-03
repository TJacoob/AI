// All links-related publications

import { Meteor } from 'meteor/meteor';
import { DeviceClass } from '../deviceClass.js';

Meteor.publish('deviceClass.all', function () {
  return DeviceClass.find();
});
