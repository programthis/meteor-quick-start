import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from "meteor/kadira:flow-router";

import "./resetPassword.html";

Template.resetPassword.onRendered(function() {
	$("#reset-email").focus();
});

Template.resetPassword.events({
	"submit form": function(evt, template) {
		evt.preventDefault();
		let email = template.find("#reset-email").value;
		Meteor.call("sendUserResetPasswordEmail", {email});
	},
	"keyup input": function(evt, template) {
		evt.preventDefault();
		let email = template.find("#reset-email").value;
		if (email.length > 0) {
			$(".resetPasswordSubmit").attr("disabled", false);
		}
		else {
			$(".resetPasswordSubmit").attr("disabled", "disabled");
		}
	}
});

