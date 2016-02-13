Template.addStatusForm.helpers({

  status: function () {

    return Status.find({}, {sort: {date: -1} });
  },

  categories: function(){
    return Category.find();
  }

});
