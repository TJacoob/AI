
export const Enumerated = new Mongo.Collection( 'enumerated' );

Enumerated.allow({
	insert() { return true; },
	update() { return true; },
	remove() { return true; }
});

EnumeratedSchema = new SimpleSchema({    
    name:{
        type: String,
        label: "Name"
    },
    value:{
        type: SimpleSchema.Integer,
        label: "Name"
    },
});

Enumerated.attachSchema( EnumeratedSchema ); 
