Meteor.publish('theList', function(){
  return Events.find({}, {"eventName": 1, "_id": 1});
});
