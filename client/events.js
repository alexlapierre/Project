Status = new Mongo.Collection('status');
Category = new Mongo.Collection('category');


Template.addStatusForm.events({

  'submit .addStatus': function (event) {
    event.preventDefault();
    var statusInput = event.target.status.value;
    var categorySelected = $('.boxCheck:checked').val();


    var dateDB = new Date();

    Status.insert({
        statusDesc : statusInput,
        category : categorySelected,
        date: dateDB
    });
},


});
