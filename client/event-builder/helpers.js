Template.eventBuilder.helpers({

  event : function(){
    var eventID = Session.get('eventID');
    var currentUserId = Meteor.userId();
    return Events.find({_id: eventID, createdBy: currentUserId});
  },

  category : function(){
    var eventID = Session.get('eventID');
    var currentUserId = Meteor.userId();
    return Category.find({eventID: eventID, createdBy: currentUserId});
  },


});
