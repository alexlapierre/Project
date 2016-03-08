Template.eventList.helpers({

  eventList : function(){
    return Events.find({}, {sort: {date: -1} });
  },


});
