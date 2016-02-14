Template.admin.events({

  'submit .addCategory': function (event) {
    event.preventDefault();
    var categoryInput = event.target.category.value;

    Category.insert({
        categoryDesc: categoryInput
    });

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
