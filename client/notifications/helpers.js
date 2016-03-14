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

    //return Status.find({ eventID: { $in: arrayEvents  } }, { category: { $in: arrayCategory } });

  return  Status.find( { $and: [ { eventID: { $in: arrayEvents  } } , { category: { $in: arrayCategory } } ] } );

}

//return subCat;

});
