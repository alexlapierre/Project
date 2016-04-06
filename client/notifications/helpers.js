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
  return userNotifications;

}

});
