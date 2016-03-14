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

Meteor.call('insertEventData', eventName,dateDB,eventID,currentUserId);

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

Meteor.call('insertCategoryData', eventCategory,eventID,eventName,currentUserId);

    $('.eventCategory').val('');

},

'click .delete': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('event_ID',this._id);
  var event_ID = Session.get('event_ID');

  Meteor.call('removeEventData',event_ID);
},

'click .deleteCategory': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('catID',this._id);
  var catID = Session.get('catID');

  Meteor.call('removeCategoryData',catID);

},

'click .deleteEventName': function () {
  event.preventDefault();
  //console.log('working');

  Session.set('thisID',this._id);
  var thisID = Session.get('thisID');

  Meteor.call('removeEventName',thisID);
  //Category.remove({eventID: thisID}); include when using methods

},

'click .finishedButton': function () {
  event.preventDefault();

Router.go('/events');

},



});
