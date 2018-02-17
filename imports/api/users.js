import { SimpleSchema } from 'meteor/aldeed:simple-schema';

var Schemas = {};
Schemas.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: "User name"
    }
});

Meteor.users.attachSchema(new SimpleSchema({
	emails: {
	    type: [Object]
	},
	"emails.$.address": {
	    type: String,
	    regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
	    type: Boolean
	},
	createdAt: {
	    type: Date
	},
	verified: {
	    type: Boolean,
	    optional: true
	},
	profile: {
	    type: Schemas.UserProfile
	},
	services: {
	    type: Object,
	    optional: true,
	    blackbox: true
	}
}));

if (Meteor.isServer) {
	Meteor.publish("users", function() {
		return Meteor.users.find({});
	});

	// sample code for setting up users (including email verification functionality)
	// Meteor.startup(function() {
	// 	let email = Meteor.settings.email,
	// 		password = Meteor.settings.emailPassword;
	// 	process.env.MAIL_URL = `smtps://${email}:${password}@smtp.gmail.com:465`;
	// });

	// Accounts.emailTemplates.from = "example email <example_email@gmail.com>";

	// Accounts.emailTemplates.resetPassword.subject = () => {
	// 	return "Link to reset your password";
	// };

	// Accounts.emailTemplates.verifyEmail.subject = () => {
	// 	return "Verify your email";
	// }

	// Accounts.validateLoginAttempt(function(options) {
	// 	if (!options.allowed) {
	// 		return false;
	// 	}

	// 	if (options.user.emails[0].verified === true) {
	// 		return true;
	// 	}
	// 	else {
	// 		let userId = options.user._id;
	// 		Meteor.call("sendVerificationEmail", {userId});
	// 		throw new Meteor.Error(403, "You must verify your email before you can login. An email has been sent to your address.");
	// 	}
	// });

	// export const registerUser = new ValidatedMethod({
	//     name: "registerUser",
	//     validate: new SimpleSchema({
	//         username: { type: String },
	//         email: { type: String },
	//         password: { type: String }
	//     }).validator(),
	//     run({ username, email, password }) {
	//         return Accounts.createUser({
	//         	email: email,
	//         	password: password,
	//         	profile: {
	//         		username: username
	//         	}
	//         });
	//     }
	// });

	// export const sendVerificationEmail = new ValidatedMethod({
	//     name: "sendVerificationEmail",
	//     validate: new SimpleSchema({
	//         userId: { type: String }
	//     }).validator(),
	//     run({ userId }) {
	//         Accounts.sendVerificationEmail(userId);
	//     }
	// });
}
