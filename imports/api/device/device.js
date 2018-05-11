
export const Device = new Mongo.Collection( 'device' );

Device.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

DeviceSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID",
      unique: true
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    refDeviceType:{
        type: SimpleSchema.Integer,
        label: "Ref Device Type"
    },
    address:{
      type: String,
      label: "Address"
    },
    refDivision:{
        type: SimpleSchema.Integer,
        label: "Ref Division"
    },
    accessLevel:{
        type: [SimpleSchema.Integer],
        label: "Access Level"
    },
    "accessLevel.$.reading": {
      type: SimpleSchema.Integer
    },
    "accessLevel.$.writing": {
      type: SimpleSchema.Integer
    },
    userBlocked:{
        type: [SimpleSchema.Integer],
        label: "User Blocked"
    },
    "userBlocked.$.reading": {
      type: SimpleSchema.Integer
    },
    "userBlocked.$.writing": {
      type: SimpleSchema.Integer
    },
    
});

Device.attachSchema( DeviceSchema ); 
