export const DeviceState = new Mongo.Collection( 'deviceState' );

DeviceState.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

DeviceStateSchema = new SimpleSchema({
  	refDevice:{
        type: SimpleSchema.Integer,
        label: "Ref Device"
    },
    refProperty:{
        type: SimpleSchema.Integer,
        label: "Ref Property"
    },
    value:{
        type: SimpleSchema.Integer,
        label: "Value"
    },
    invalidValue:{
        type: Boolean,
        label: "Invalid Value"
    },
});

DeviceState.attachSchema( DeviceStateSchema ); 
