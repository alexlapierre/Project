Template.subscriptions.helpers({

  categories: function(){
    var currentEventID = Session.get('eventID');
    Meteor.subscribe('theSubCategory');
    return Category.find({eventID: currentEventID});
  },

  sub : function(){
    var currentUser = Meteor.userId();
    Meteor.subscribe('theSubscription');
    return Subscriptions.find({userID:currentUser});
  }

});
