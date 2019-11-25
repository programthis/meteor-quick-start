import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from "meteor/kadira:flow-router";

import "./login.html";

Accounts.onEmailVerificationLink(function(token, done) {
	Accounts.verifyEmail(token, done);
});

Template.login.onRendered(function() {
	$("#li-email").focus();
});

Template.login.events({
	"submit form": function(evt, template) {
		evt.preventDefault();
		let email = template.find("#li-email").value,
			password = template.find("#li-password").value;
		Meteor.loginWithPassword(email, password, function(error, result) {
			if (error) {
				$(".errorMessage").html(error.reason);
			}
			else {
				FlowRouter.go("home");
			}
		});
	},
	"keyup input": function(evt, template) {
		evt.preventDefault();
		let email = template.find("#li-email").value,
			password = template.find("#li-password").value;
		if (email.length > 0 && password.length > 0) {
			$(".loginSubmit").attr("disabled", false);
		}
		else {
			$(".loginSubmit").attr("disabled", "disabled");
		}
	}
});