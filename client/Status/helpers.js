Template.addStatusForm.helpers({

  status: function () {
    var categoryFilter = Session.get('categoryFilter');
    var clickChecker = Session.get('clickChecker');
    if(clickChecker){
       return Status.find({category: categoryFilter}, {sort: {date: -1} });
    }else{
    return Status.find({}, {sort: {date: -1} });
  }
  },

  categories: function(){
    return Category.find();
  },

  filter: function(){
    var clickChecker = Session.get('clickChecker');
    if(clickChecker){
      return "clicked"
    }else{
      return "not clicked"
    }
  }

});
