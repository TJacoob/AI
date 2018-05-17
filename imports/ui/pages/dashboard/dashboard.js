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
	Session.set("addDevice", false);
	Session.set("selected-division", "");
	Session.set("selected-floor", "");
});


Template.slide.rendered = function() {

	let rD = this.data.rD;
	let rP = this.data.rP;
	let d = Device.findOne({"ID":rD});
	let dType = DeviceType.findOne({"ID":d.refDeviceType});
	let property = dType.propertyList[rP-1];
	let valueType = ScalarValueType.findOne({"ID":property.refValueType});
	let dS = DeviceState.findOne({"refDevice":rD, "refProperty":rP}).value;

    if (!this.$('#slider-'+rD+"-"+rP).data('uiSlider')) {
        $('#slider-'+rD+"-"+rP).slider({
			value: dS,
			min: valueType.minValue,
			max: valueType.maxValue,
			step: valueType.step,
      		stop: function( event, ui ) {
      			//console.log(ui.value);
      			//console.log(rD +" - "+rP+ " - "+ui.value);
      			Meteor.call('changeDeviceValue', rD, rP, ui.value );
        		//$( "#amount" ).val( "$" + ui.value );
      		}
    	});
    	//console.log("SPECIAL: " + $( "#slider" ).slider( "value" ))
    	//$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    }
};

Template.slide.helpers({
	slideId(){
		//console.log(this);
		return "slider-"+this.rD+"-"+this.rP;
	}
})


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
	isEnum()
	{
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		return property.valueType == "ENUM";
	},
	isScalar()
	{
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		return property.valueType == "SCALAR";
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

	getPropertyName()
	{
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		return property.name;
	},

	getPropertyUnit(refProperty)
	{
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		return ScalarValueType.findOne({"ID":property.refValueType}).units;
	},
	enumerated()
	{
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		//let rvt = Property.findOne({"ID":refProperty}).refValueType;
		return EnumValueType.findOne({"ID":property.refValueType}).enumeratedList;
	},
	valueChecked(device, property, thisEnumValue){
		let deviceStateValue = DeviceState.findOne({"refDevice":device, "refProperty":property}).value;
		return deviceStateValue == thisEnumValue;
	},
	addDevice(){
		return Session.get("addDevice");
	},
	getDivision(){
		return Session.get("selected-division");	
	},
	deviceTypes(){
		//console.log(DeviceType.find({}));
		return DeviceType.find({});
	},
	inDivision(){
		return Session.get("selected-division") != "";
	},
	readWrite(){
		let d = Device.findOne({"ID":this.refDevice});
		let dType = DeviceType.findOne({"ID":d.refDeviceType});
		let property = dType.propertyList[this.refProperty-1];
		return property.accessMode == "RW";
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
		Session.set("addDevice", false );
		let base = [180, 50, 50];
		let color = [base[0]+(10*this.heightOrder), base[1], base[2]];
		Session.set("floor-color", "background-color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%); color: hsl("+color[0]+", "+color[1]+"%, "+color[2]+"%)")
	},
	"click .division-selection": function(){
		Session.set("selected-division", this.ID );
		Session.set("addDevice", false );
	},
	"click .update-value": function(event, template){
		let device = parseInt(event.currentTarget.getAttribute("device"));
		let property = parseInt(event.currentTarget.getAttribute("property"));
		//console.log(device +" - "+property+ " - "+this.value);
		Meteor.call('changeDeviceValue', device, property, parseInt(this.value) );
	},
	"click #add_device": function(){
		Session.set("addDevice", true);
	},
	"submit .new-task": function(event) {
	    // Prevent default browser form submit
	    event.preventDefault();
	 
	    // Get value from form element
	    const target = event.target;
	    const name = target.name.value;
	    const address = target.address.value;
	    const refDivision = parseInt(target.refDivision.value);
	    const deviceType = parseInt(target.deviceType.value);
	 
	    // Insert a task into the collection
	    //console.log(name);
	    //console.log(address);
	    //console.log(refDivision);
	    //console.log(deviceType);
	 
	 	Meteor.call('addDevice', name, deviceType, address, refDivision);

	    // Clear form
	    target.name.value = '';
	    target.address.value = '';

	    Session.set("addDevice", false);
  	},
});



