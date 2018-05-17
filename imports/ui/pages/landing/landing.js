import './landing.html';

Template.landing.events({
  	"click #start-sim": function(){
  		Meteor.call("populate");
  		FlowRouter.go('/dash');
	},
});



