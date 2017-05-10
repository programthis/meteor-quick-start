import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layout/layout.js';
import '../../ui/home/home.js';

// document.title = "Title of Website";

// Sample setup for private routes
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

// Sample setup to determine if user is logged in
// function isUser() {
// 	if (!Meteor.userId()) {
// 		FlowRouter.go("home");
// 	}
// }