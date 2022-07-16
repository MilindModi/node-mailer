var {admin} = require('../controller/middleware/admin');
const logger = require('node-color-log');

let token ="dUFNdFHwRHyeRyGRBfeWUL:APA91bHQ2-v63-oR3WThpGOwNrIJbytcRkolQ-o30di8XjhkBWNIM-0kiNk6FpjDKQQnpo-ymx0pw3zwTLftHWn2gaAwdobj4-scnO-L2RVT84OpTZI0XWSkS9WDq0sifHKw6N3OohrL";

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

const message = {
    notification: {

        body: "username" + " Changeds",
    },
    data: {
        msgType: "MESSAGE",

        group_id: "chat_id",
        isGroup: "true",
        receiver_id: null ?? "chat_id"
    }
};

admin.messaging().sendToDevice(token, message, notification_options)
.then(response => {
    // console.log(response);
    logger.color('green').log("Success ",response);
    count = 0;
})
.catch(error => {
    logger.color('red').log("Error sending FCM ",error);

});