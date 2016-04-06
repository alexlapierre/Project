Template.subscriptions.events({

'click .subscribe': function (event) {
  if(event){
  event.preventDefault();

  var currentUserId = Meteor.userId();
  var currentEventID = Session.get('eventID');
  var checked = [];

$("input[name='categoryPicked']:checked").each(function ()
{
    checked.push($(this).val());
});

  for(val of checked){
    Meteor.call('insertSubscriptionData', currentUserId, currentEventID, val);
  }
  $(".subscribe").css('visibility', 'hidden');
  $(".unsubscribe").css('visibility', 'visable');
}

},

'click .unsubscribe': function (event) {

  if(event){
  event.preventDefault();
  $(".subscribe").css('visibility', 'visible');
  $(".unsubscribe").css('visibility', 'hidden');
}
},

});
