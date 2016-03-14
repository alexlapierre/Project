Meteor.methods({

    'insertSubscriptionData': function(currentUserId, currentEventID, val){
      Subscriptions.insert({
          userID : currentUserId,
          eventID : currentEventID,
          category : val
      });
    },
});
