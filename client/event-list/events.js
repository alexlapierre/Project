Template.eventList.events({

  'submit .addCategory': function (event) {
    event.preventDefault();
    var categoryInput = event.target.category.value;

    if(categoryInput != ""){
    Category.insert({
        categoryDesc: categoryInput
    });
  }else{
    window.confirm("A blank input cannot be used as a category. Please enter a valid category.");
  }

    $('.categoryInput').val('');

  },

  'click .delete': function () {
    event.preventDefault();
    //console.log('working');

    //console.log(this._id);
    Session.set('categoryID',this._id);
    var categoryID = Session.get('categoryID');

    Category.remove({_id: categoryID});
  },
});
