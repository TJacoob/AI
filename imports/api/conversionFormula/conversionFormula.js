
export const ConversionFormula = new Mongo.Collection( 'conversionFormula' );

ConversionFormula.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

ConversionFormulaSchema = new SimpleSchema({
  	ID:{
  		type: SimpleSchema.Integer,
  		label: "ID"
  	},
  	name:{
  		type: String,
		label: "Name"
  	},
    userToSystem: {
        type: String,
        label: "User to System"
    },
    systemToUser: {
        type: String,
        label: "System to User"
    },
    decimal: {
        type: SimpleSchema.Integer,
        label: "Decimal Places"
    },
});

ConversionFormula.attachSchema( ConversionFormulaSchema ); 
