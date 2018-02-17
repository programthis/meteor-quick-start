import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from "meteor/kadira:flow-router";

import "./register.html";

Template.register.onRendered(function() {
	$("#rg-username").focus();
});

Template.register.events({
	"submit form": function(evt, template) {
		evt.preventDefault();
		let username = email = template.find("#rg-username").value,
			email = template.find("#rg-email").value.toLowerCase(),
			password = template.find("#rg-password").value;
		Meteor.call("registerUser", { username, email, password }, function(error, result) {
			if (error) {
			}
			else {
				let userId = result;
				Meteor.call("sendVerificationEmail", {userId}, function(error, result) {
					if (error) {
					}
					else {
						$(".errorMessage").html("A verification email has been sent to your address.");
					}
				});
			}
		});
	},
	"keyup input": function(evt, template) {
		evt.preventDefault();
		let email = template.find("#rg-email").value,
			password = template.find("#rg-password").value;
		if (email.length > 0 && password.length > 0) {
			$(".registerSubmit").attr("disabled", false);
		}
		else {
			$(".registerSubmit").attr("disabled", "disabled");
		}
	}
});