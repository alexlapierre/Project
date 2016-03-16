Template.notifications.helpers({

  notifications : function(){

    Meteor.subscribe('theNotificationStatus');
    Meteor.subscribe('theNotificationSubscriptions');

    var currentUserID = Meteor.userId();
    var usersEventIds =  Subscriptions.find({userID: currentUserID}, {"eventID": 1});
    var userCategorys = Subscriptions.find({userID: currentUserID}, {"category": 1});
    var arrayEvents = [];
    var arrayCategory =[];

    usersEventIds.forEach(function (collection) {
      arrayEvents.push(collection.eventID);
  });

  userCategorys.forEach(function (collection) {
    arrayCategory.push(collection.category);
});

//All the status's the user should be notified for based on what eventID and categorys he/she is subscribed to.
  var userNotifications = Status.find({ $and: [ { eventID: { $in: arrayEvents  } } , { category: { $in: arrayCategory } }, { createdBy: { $ne: currentUserID } } ] }, {sort: {date: -1} } );

/**
  //Count of all the status's the user should be notified for based on what eventID and categorys he/she is subscribed to.

  var query = Status.find({ $and: [ { eventID: { $in: arrayEvents  } } , { category: { $in: arrayCategory } }, { createdBy: { $ne: currentUserID } } ] }, {sort: {date: -1} } );

  var handle = query.observe({
    added: function (id, fields) {
      sAlert.success('New Notifications', {timeout: '6000'});
    },
  });

  // After five seconds, stop keeping the count.
  setTimeout(function () {handle.stop();}, 5000);
  **/

  return userNotifications;


/*

//Putting all these status's into a notifications collection.

  userNotifications.forEach(function (collection) {

    var eventID = collection.eventID;
    var category = collection.category;
    var eventName = collection.currentEventName;

    Meteor.call('insertNotificationsData', eventID,category,eventName,currentUserID);
});


Meteor.subscribe('theNotifications');
return Notifications.find({currentUserID:currentUserID});

*/
}

});
