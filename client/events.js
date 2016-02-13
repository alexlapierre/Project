Status = new Mongo.Collection('status');
Category = new Mongo.Collection('category');


Template.addStatusForm.events({

  'submit .addStatus': function (event) {
    event.preventDefault();
    var statusInput = event.target.status.value;
    var categorySelected = $('.boxCheck:checked').val();


    var dateDB = new Date();

    console.log(dateDB);


    Status.insert({
        statusDesc : statusInput,
        category : categorySelected,
        date: dateDB
    });

    $('.statusInput').val('');
},

'click .delete': function () {
  event.preventDefault();
  //console.log('working');

  //console.log(this._id);
  Session.set('statusID',this._id);
  var statusID = Session.get('statusID');

  Status.remove({_id: statusID});
},


});
