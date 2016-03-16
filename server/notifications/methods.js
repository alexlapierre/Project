Meteor.methods({

    'insertNotificationsData': function(eventID,category,eventName,currentUserID){
      Notifications.insert({
          eventID: eventID,
          category: category,
          eventName: eventName,
          currentUserID : currentUserID
      });
    },


});
