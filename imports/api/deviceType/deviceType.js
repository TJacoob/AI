
export const DeviceType = new Mongo.Collection( 'deviceType' );

DeviceType.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

DeviceTypeSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID",
      unique: true
  	},
  	name:{
  		type: String,
  		label: "Name"
  	},
    refDeviceClass:{
        type: SimpleSchema.Integer,
        label: "Ref Device Class"
    },
    description:{
        type: String,
        label: "Description"
    },
    propertyList:
    {
        type: [SimpleSchema.Integer],
        label: "Properties"
    }
});

DeviceType.attachSchema( DeviceTypeSchema ); 
