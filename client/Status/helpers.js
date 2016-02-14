Template.addStatusForm.helpers({

    status: function () {
      var categorySelected = Session.get('categorySelected');

      if($( "#filterCheck" ).submit()){
        return Status.find({category: categorySelected}, {sort: {date: -1} });
      }
      else {
        return Status.find({}, {sort: {date: -1} });
      }
  },


   categories: function(){
      return Category.find();
  }


});
