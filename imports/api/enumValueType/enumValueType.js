import { Enumerated } from '../enumerated/enumerated.js';

export const EnumValueType = new Mongo.Collection( 'enumValueType' );

EnumValueType.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

EnumValueTypeSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    enumeratedList:{
        type: [Enumerated],
        label: "Enumerated"
    },
    "enumeratedList.$.name": {
      type: String
    },
    "enumeratedList.$.value": {
      type: Number
    }
});

EnumValueType.attachSchema( EnumValueTypeSchema ); 
