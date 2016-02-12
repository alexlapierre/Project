Template.addStatusForm.helpers({

  status: function () {
    return Status.find();
  },

  categories: function(){
    return Category.find();
  }







});
