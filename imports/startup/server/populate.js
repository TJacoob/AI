
import { Enumerated } from '../../api/enumerated/enumerated.js';
import { EnumValueType } from '../../api/enumValueType/enumValueType.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (EnumValueType.find().count() == 0) {
    const enum1 = { 
		name:"On",
		value: 1,
	}

	const enum2 = { 
		name:"Off",
		value: 0,
	}

	const valuetype1 = {
		ID:1,
		name:"On-Off",
		enumeratedList: [ enum2, enum1 ]
	}

	EnumValueType.insert(valuetype1);
  }
});