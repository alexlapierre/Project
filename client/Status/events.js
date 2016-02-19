Template.addStatusForm.events({

  'submit .addStatus': function (event) {
    event.preventDefault();
    var statusInput = event.target.status.value;
    //var categorySelected = $('.boxCheck:checked').val();
    var categorySelected = event.target.categoryDropMenu.value;

    var dateDB = new Date();

    console.log(dateDB);


    Status.insert({
        statusDesc : statusInput,
        category : categorySelected,
        date: dateDB
    });

    $('.statusInput').val('');

    if(event){
      Session.set('clickChecker',false)
    }

},

'click .delete': function () {
  event.preventDefault();
  //console.log('working');

  //console.log(this._id);
  Session.set('statusID',this._id);
  var statusID = Session.get('statusID');

  Status.remove({_id: statusID});
},


'submit .filter': function (event) {

  event.preventDefault();
  if(event){
    Session.set('clickChecker',true)
  }

  var categoryFilter = event.target.categoryFilter.value;

  Session.set('categoryFilter', categoryFilter);

}

});
