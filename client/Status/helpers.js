Template.addStatusForm.helpers({

  status: function () {
    Meteor.subscribe('theStatus');
    var currentEventID = Session.get('eventID');
    var categoryFilter = Session.get('categoryFilter');
    var clickChecker = Session.get('clickChecker');
    if(clickChecker){
       return Status.find({category: categoryFilter}, {sort: {date: -1} });
    }else{
    return Status.find({eventID: currentEventID}, {sort: {date: -1} });
  }
  },

  categories: function(){
    Meteor.subscribe('theCategorys');
    var currentEventID = Session.get('eventID');
    return Category.find({eventID: currentEventID});
  },

  filter: function(){
    var clickChecker = Session.get('clickChecker');
    if(clickChecker){
      return "clicked"
    }else{
      return "not clicked"
    }
  },

});
