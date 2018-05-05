// All links-related publications

import { Meteor } from 'meteor/meteor';
import { ConversionFormula } from '../conversionFormula.js';

Meteor.publish('ConversionFormula.all', function () {
	return ConversionFormula.find({});
});
