Template.subscriptions.events({

'click .subscribe': function () {
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

},

});
