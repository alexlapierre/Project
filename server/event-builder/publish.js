Meteor.publish('theEvent', function(eventID, currentUserId){
    return Events.find({_id: eventID, createdBy: currentUserId});
});

Meteor.publish('theCategory', function(eventID, currentUserId){
  return Category.find({eventID: eventID, createdBy: currentUserId});
});
