import { Meteor } from 'meteor/meteor';
import { Floor } from '/imports/api/floor/floor.js';
import { Division } from '/imports/api/division/division.js';
import { Device } from '/imports/api/device/device.js';
import { Property } from '/imports/api/property/property.js';
import { ScalarValueType } from '/imports/api/scalarValueType/scalarValueType.js';
import './dashboard.html';

Template.Dashboard.onCreated(function () {
	Meteor.subscribe('links.all');
	Meteor.subscribe('ScalarValueType.all');
	Meteor.subscribe('EnumValueType.all');
	Meteor.subscribe('Enumerated.all');
	Meteor.subscribe('Property.all');
	Meteor.subscribe('DeviceType.all');
	Meteor.subscribe('Device.all');
	Meteor.subscribe('DeviceState.all');
	Meteor.subscribe('Floor.all');
	Meteor.subscribe('House.all');
	Meteor.subscribe('Division.all');
});

Template.slide.rendered = function() {

	let rD = this.data.rD;
	let rP = this.data.rP;
	let rvt = Property.findOne({"ID":this.data.rP});
	let valueType = ScalarValueType.findOne({"ID":rvt.refValueType});
	//console.log(valueType);

    if (!this.$('#slider').data('uiSlider')) {
        $( "#slider" ).slider({
			value:0,
			min: valueType.minValue,
			max: valueType.maxValue,
			step: valueType.step,
      		stop: function( event, ui ) {
      			//console.log(ui.value);
      			Meteor.call('changeDeviceValue', rD, rP, ui.value );
        		//$( "#amount" ).val( "$" + ui.value );
      		}
    	});
    	//console.log("SPECIAL: " + $( "#slider" ).slider( "value" ))
    	//$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    }
};


Template.Dashboard.helpers({
	// Function
	floors() {
		return Floor.find({}, {sort: {heightOrder: -1}});
	},
	divisions() {
		let rF = Session.get("selected-floor");
		return Division.find({"refFloor":rF});
	},
	devices() {
		let rD = Session.get("selected-division");
		return Device.find({"refDivision":rD});
	},
	deviceState( id )
	{
		return DeviceState.find({"refDevice": id });
	},
	isEnum( id )
	{
		return Property.findOne({"ID":id}).valueType == "ENUM";
	},
	isScalar( id )
	{
		return Property.findOne({"ID":id}).valueType == "SCALAR";
	},
	activeFloor()
	{	
		if ( this.ID == Session.get("selected-floor") )
			return "color: white";
		else
			return "color: inherit";
	},
	activeDivision()
	{	
		if ( this.ID == Session.get("selected-division") )
			return "color: #1c1c1c";
		else
			return "color: inherit";
	},
	currentBackground()
	{
		return Session.get("floor-color");
	},

	getPropertyName(refProperty)
	{
		return Property.findOne({"ID":refProperty}).name;
	},

	getPropertyUnit(refProperty)
	{
		let rvt = Property.findOne({"ID":refProperty}).refValueType;
		return ScalarValueType.findOne({"ID":rvt}).units;
	},
	enumerated( refProperty )
	{
		let rvt = Property.findOne({"ID":refProperty}).refValueType;
		return EnumValueType.findOne({"ID":rvt}).enumeratedList;
	},
	enumeratedIsValue(){
		console.log(this);
	},


	//Styling
	floorColor( heightOrder )
	{
		let base = [180, 50, 50];
		let color = [base[0]+(10*heightOrder), base[1], base[2]];
		//return "background-color: hsv("+color[0]+"°, "+color[1]+"%, "+color[2]+"%)";
		return "background-color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%); color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%)";
	},

	divisionColor( index )
	{
		let base = [71, 0, 90];
		let color = [base[0], base[1], base[2]-(10*index)];
		//return "background-color: hsv("+color[0]+"°, "+color[1]+"%, "+color[2]+"%)";
		return "background-color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%); color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%)";
	}
});

Template.Dashboard.events({
  	"click .floor-selection": function(){
		Session.set("selected-floor", this.ID );
		Session.set("selected-division", "" );
		let base = [180, 50, 50];
		let color = [base[0]+(10*this.heightOrder), base[1], base[2]];
		Session.set("floor-color", "background-color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%); color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%)")
	},
	"click .division-selection": function(){
		Session.set("selected-division", this.ID );
	},
	/*
	"click #test": function(){
		Meteor.call('changeDeviceValue', this.refDevice, this.refProperty, 1 );
	}
	*/
});



