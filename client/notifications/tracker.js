/*
Tracker.autorun(function () {

  var currentUserID = Meteor.userId();

  Meteor.subscribe('theNotificationStatus');
  Meteor.subscribe('theNotificationSubscriptions');

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
  var userNotifications = Status.find( { $and: [ { eventID: { $in: arrayEvents  } } , { category: { $in: arrayCategory } } ] } );

  //Putting all these status's into a notifications collection.

  userNotifications.forEach(function (collection) {

  var eventID = collection.eventID;
  var category = collection.category;
  var eventName = collection.currentEventName;

  Meteor.call('insertNotificationsData', eventID,category,eventName,currentUserID);
  });


});
*/
