
export const ConversionObject = new Mongo.Collection( 'conversionObject' );

ConversionObject.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

ConversionObjectSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
		label: "Name"
  	},
    userToSystem: {
        type: SimpleSchema.Integer,
        label: "User to System"
    },
    systemToUser: {
        type: SimpleSchema.Integer,
        label: "System to User"
    },
    decimal: {
        type: SimpleSchema.Integer,
        label: "Decimal Places"
    },
});

ConversionObject.attachSchema( ConversionObjectSchema ); 
