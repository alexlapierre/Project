Template.eventBuilder.helpers({

  event : function(){
    var eventID = Session.get('eventID');
    var currentUserId = Meteor.userId();

    Meteor.subscribe('theEvent', eventID, currentUserId);
    return Events.find({_id: eventID, createdBy: currentUserId});
  },

  category : function(){
    var eventID = Session.get('eventID');
    var currentUserId = Meteor.userId();
    //return Category.find({eventID: eventID, createdBy: currentUserId});

    Meteor.subscribe('theCategory', eventID, currentUserId);
    return Category.find({eventID: eventID, createdBy: currentUserId});

  },


});
