Template.addStatusForm.events({

// Adds a status to the Status collection

  'submit .addStatus': function (event) {
    event.preventDefault();
    var statusInput = event.target.status.value;
    //var categorySelected = $('.boxCheck:checked').val();
    var categorySelected = event.target.categoryDropMenu.value;
    var currentEventID = Session.get('eventID');

    if(Meteor.user()){
    var userEmail = Meteor.user().emails[0].address;
  }else{
    var userEmail = "Annonymous";
  }
    var dateDB = new Date();

    console.log(dateDB);

  if (statusInput != ""){

    Meteor.call('insertStatusData', statusInput,categorySelected,dateDB,userEmail,currentEventID);

  }else{
    window.confirm("Blank statuses are not valid. Please write something!")
  }

    $('.statusInput').val('');

    if(event){
      Session.set('clickChecker',false)
    }

},

//The filter event checks if the filter submit button has been clicked

'submit .filter': function (event) {

  event.preventDefault();
  if(event){
    Session.set('clickChecker',true);
  }

  var categoryFilter = event.target.categoryFilter.value;

  Session.set('categoryFilter', categoryFilter);

},

//If the reset button is clicked it turns off the filter to show all comments again

'click .reset': function () {
  event.preventDefault();
  if(event){
    Session.set('clickChecker',false);
  }
},

//deletes a status from the status collection

'click .delete': function () {
  event.preventDefault();

  Session.set('statusID',this._id);
  var statusID = Session.get('statusID');

  Meteor.call('removeStatusData', statusID);

},



});
