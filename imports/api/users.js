import { SimpleSchema } from 'meteor/aldeed:simple-schema';

var Schemas = {};
Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String,
        label: "User's name"
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
}
