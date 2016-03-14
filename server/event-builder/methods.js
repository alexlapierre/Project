Meteor.methods({

    'insertEventData': function(eventName,dateDB,eventID,currentUserId){
      Events.insert({
          eventName : eventName,
          date: dateDB,
          _id: eventID,
          createdBy: currentUserId
 });
    },

    'insertCategoryData': function(eventCategory,eventID,eventName,currentUserId){
      Category.insert({
          eventCategory: eventCategory,
          eventID : eventID,
          eventName:eventName,
          createdBy: currentUserId
      });
    },

    'removeEventData': function(event_ID){
      Events.remove({_id: event_ID});
    },

    'removeCategoryData': function(catID){
      Category.remove({_id: catID});
    },

    'removeEventName': function(thisID){
     Events.remove({_id: thisID});
   },

   



});
