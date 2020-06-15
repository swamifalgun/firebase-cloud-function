const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {
  snapshotConstructor,
} = require("firebase-functions/lib/providers/firestore");

admin.initializeApp(functions.config().firebase);



exports.messageTrigger = functions.firestore
  .document("messages/{messageId}")
  .onCreate((event, context) => {    
    var msgData = {
      title: "coach",
      body: "train at 4",
      deviceId:
        "",
    };

    console.log(event.params);
    
    var id = event.params.id;
    console.log(id);

    var document = admin.firestore.document('messages/' + id).set(msgData);

    console.log(document);
    return admin.firestore.document('messages/' + id).get();

  });
