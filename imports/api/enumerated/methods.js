// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Enumerated } from './enumerated.js';

Meteor.methods({
 	newEnumerated: function(name, value)
 	{
 		Enumerated.insert({name:name, value:value});
 	}
});
