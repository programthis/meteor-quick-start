import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/layout.js';
import '../../ui/home/home.js';
import '../../ui/login/login.js';
import '../../ui/register/register.js';
import '../../ui/resetPassword/resetPassword.js';
import '../../ui/newPassword/newPassword.js';

// document.title = "Title of Website";

// let privateRoutes = FlowRouter.group({
// 	name: "private",
// 	triggersEnter: [
// 		isUser
// 	]
// });

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('layout', { main: 'home' });
	}
});

// FlowRouter.route('/', {
// 	name: 'login',
// 	triggersEnter: [
// 		notUser
// 	],
// 	action() {
// 		BlazeLayout.render('layout', { main: 'login' });
// 	}
// });

// FlowRouter.route('/', {
// 	name: 'register',
// 	triggersEnter: [
// 		notUser
// 	],
// 	action() {
// 		BlazeLayout.render('layout', { main: 'register' });
// 	}
// });

// FlowRouter.route('/', {
// 	name: 'resetPassword',
// 	triggersEnter: [
// 		notUser
// 	],
// 	action() {
// 		BlazeLayout.render('layout', { main: 'resetPassword' });
// 	}
// });

// FlowRouter.route('/', {
// 	name: 'newPassword',
// 	triggersEnter: [
// 		notUser
// 	],
// 	action() {
// 		BlazeLayout.render('layout', { main: 'newPassword' });
// 	}
// });

// function isUser() {
// 	if (!Meteor.userId()) {
// 		FlowRouter.go("home");
// 	}
// }

// function notUser() {
// 	if (Meteor.userId()) {
// 		FlowRouter.go("home");
// 	}
// }