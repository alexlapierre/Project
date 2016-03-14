Meteor.methods({

    'insertStatusData': function(statusInput,categorySelected,dateDB,userEmail,currentEventID){
      Status.insert({
          statusDesc : statusInput,
          category : categorySelected,
          date: dateDB,
          userEmail: userEmail,
          eventID : currentEventID
      });
    },

    'removeStatusData': function(statusID){
       Status.remove({_id: statusID});
    },




});
