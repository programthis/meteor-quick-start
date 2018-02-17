import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from "meteor/kadira:flow-router";

import "./newPassword.html";

var userToken;

Accounts.onResetPasswordLink(function(token) {
	userToken = token;
	FlowRouter.go("newPassword");
});

Template.newPassword.onRendered(function() {
	$("#reset-password").focus();
});

Template.newPassword.events({
	"submit form": function(evt, template) {
		evt.preventDefault();
		let password = template.find("#reset-password").value;
		Accounts.resetPassword(userToken, password, function(error, result) {
			if (error) {
			}
			else {
				FlowRouter.go("home");
			}
		});
	},
	"keyup input": function(evt, template) {
		evt.preventDefault();
		let password = template.find("#reset-password").value;
		if (password.length > 0) {
			$(".resetPasswordSubmit").attr("disabled", false);
		}
		else {
			$(".resetPasswordSubmit").attr("disabled", "disabled");
		}
	}
});

