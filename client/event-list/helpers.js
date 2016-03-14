Template.eventList.helpers({

  eventList : function(){
    Meteor.subscribe('theList');
    return Events.find({}, {sort: {date: -1} });
  },


});
