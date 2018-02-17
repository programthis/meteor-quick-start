import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/layout.js';
import '../../ui/home/home.js';
import '../../ui/login/login.js';

// document.title = "Title of Website";

let privateRoutes = FlowRouter.group({
	name: "private",
	triggersEnter: [
		isUser
	]
});

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('layout', { main: 'home' });
	}
});

FlowRouter.route('/', {
	name: 'login',
	triggersEnter: [
		notUser
	],
	action() {
		BlazeLayout.render('layout', { main: 'login' });
	}
});

function isUser() {
	if (!Meteor.userId()) {
		FlowRouter.go("home");
	}
}

function notUser() {
	if (Meteor.userId()) {
		FlowRouter.go("home");
	}
}