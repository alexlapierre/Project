Template.addStatusForm.helpers({

    status: function () {

      var filterChecked = false;
      $( ".filterCheck" ).click(function() {
        var filterChecked = true;
      });

      var categorySelected = Session.get('categorySelected');

      if(filterChecked){
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
