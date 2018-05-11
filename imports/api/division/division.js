
export const Division = new Mongo.Collection( 'division' );

Division.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

DivisionSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID",
      unique: true
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    refFloor:{
        type: SimpleSchema.Integer,
        label: "Ref Floor"
    },
    accessLevel:{
        type: SimpleSchema.Integer,
        label: "Access Level"
    },
});

Division.attachSchema( DivisionSchema ); 
