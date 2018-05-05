// All links-related publications

import { Meteor } from 'meteor/meteor';
import { ConversionObject } from '../conversionObject.js';

Meteor.publish('ConversionObject.all', function () {
	return ConversionObject.find({});
});
