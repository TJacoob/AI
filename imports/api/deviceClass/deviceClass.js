DeviceClass = new Mongo.Collection( 'deviceClass' );

DeviceClass.allow({
	insert() { return false; },
	update() { return false; },
	remove() { return false; }
});

DeviceClassSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
  		label: "Name"
  	}
});

DeviceClass.attachSchema( DeviceClassSchema ); 
