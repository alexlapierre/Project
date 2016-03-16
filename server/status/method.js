Meteor.methods({

    'insertStatusData': function(statusInput,categorySelected,dateDB,userEmail,currentEventID){

      var eventName = Events.findOne({_id: currentEventID}).eventName;
      var currentUserId = Meteor.userId();
      Status.insert({
          currentEventName: eventName,
          statusDesc : statusInput,
          category : categorySelected,
          date: dateDB,
          userEmail: userEmail,
          eventID : currentEventID,
          createdBy : currentUserId

      });
    },

    'removeStatusData': function(statusID){
       Status.remove({_id: statusID});
    },




});
