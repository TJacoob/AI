
export const Floor = new Mongo.Collection( 'floor' );

Floor.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

FloorSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID",
      unique: true
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    heightOrder:{
        type: SimpleSchema.Integer,
        label: "Height Order"
    },
});

Floor.attachSchema( FloorSchema ); 
