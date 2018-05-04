
export const Property = new Mongo.Collection( 'property' );

Property.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

PropertySchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    accessMode:{
      type: String,
      label: "Access Mode"
    },
    valueType:{
      type: String,
      label: "Value Type"
    },
    refValueType:{
      type: SimpleSchema.Integer,
      label: "Ref Value Type"
    }
});

Property.attachSchema( PropertySchema ); 
