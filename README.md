I spin up a lot of meteor prototypes and just found it annoying to have to do the same initial steps to get the app set-up. The skeleton structure I've created here mostly aims to have the essential packages pre-installed and the basic app structure intact. Below, you can see the full list of my changes:

Packages removed:
- autopublish
- insecure

Packages added:
- accounts-password
- fourseven:scss
- kadira:flow-router
- kadira:blaze-layout
- aldeed:simple-schema
- aldeed:collection2
- arillo:flow-router-helpers

Other:
- added imports folder hierarchy
- created basic router.js file
- created schema and subscription for users

# Installation instructions
meteor npm install

# Launch instructions
meteor
