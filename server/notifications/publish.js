Meteor.publish('theNotificationStatus', function(){
  return Status.find();
});

Meteor.publish('theNotificationSubscriptions', function(){
  return Subscriptions.find();
});

Meteor.publish('theNotifications', function(){
  return Notifications.find();
});
