import { Template } from 'meteor/templating';

import "./home.html";

// Sample setup for the home templates
Template.home.onCreated(function() {
	let self = this;
	self.autorun(function() {
		self.subscribe("users");
	});
});

Template.home.events({

})