
export const House = new Mongo.Collection( 'house' );

House.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

HouseSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID",
      unique: true
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    address:{
      type: String,
      label: "Name"
    },
    phone:{
      type: String,
      label: "Name"
    },
    floors:{
      type: [SimpleSchema.Integer],
      label: "Floors"
    },
    divisions:{
      type: [SimpleSchema.Integer],
      label: "Divisions"
    },
});

House.attachSchema( HouseSchema ); 
