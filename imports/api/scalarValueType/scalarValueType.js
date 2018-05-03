
export const ScalarValueType = new Mongo.Collection( 'scalarValueType' );

ScalarValueType.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

ScalarValueTypeSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    numbits:{
      type: SimpleSchema.Integer,
      label: "Number of Bits"
    },
    units:{
      type: String,
      label: "Name"
    },
    minValue:{
      type: SimpleSchema.Integer,
      label: "Minimal Value"
    },
    maxValue:{
      type: SimpleSchema.Integer,
      label: "Maximum Value"
    },
    step:{
      type: SimpleSchema.Integer,
      label: "Step"
    }
});

ScalarValueType.attachSchema( ScalarValueTypeSchema ); 
