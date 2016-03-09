Template.eventBuilder.events({

  'click .addEventButton': function (event) {
    
   if(event){
     event.preventDefault();
     var eventName = $('.eventName').val();
     var dateDB = new Date();
   var eventID = new Meteor.Collection.ObjectID().toHexString();
   Session.set('eventID', eventID);
   Session.set('eventName',eventName);
   var currentUserId = Meteor.userId();

     Events.insert({
         eventName : eventName,
         date: dateDB,
         _id: eventID,
         createdBy: currentUserId
});

console.log(eventID);
$('.eventName').val('');

$(".eventForm").hide();
$(".categoryForm").show();
$(".eventBuilderTable").show();
}
},

  'click .addCatButton': function (event) {

    event.preventDefault();
    var eventCategory = $('.eventCategory').val();
    var eventID = Session.get('eventID');
    var eventName = Session.get('eventName');
    var currentUserId = Meteor.userId();


    Category.insert({
        eventCategory: eventCategory,
        eventID : eventID,
        eventName:eventName,
        createdBy: currentUserId
    });

    $('.eventCategory').val('');

},

'click .delete': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('event_ID',this._id);
  var event_ID = Session.get('event_ID');

  Events.remove({_id: event_ID});
},

'click .deleteCategory': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('catID',this._id);
  var catID = Session.get('catID');

  Category.remove({_id: catID});
},

'click .deleteEventName': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('thisID',this._id);
  var thisID = Session.get('thisID');

  Events.remove({_id: thisID});
  //Category.remove({eventID: thisID}); include when using methods

},

'click .finishedButton': function () {
  event.preventDefault();

Router.go('/events');

},



});
