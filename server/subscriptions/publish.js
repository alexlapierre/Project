Meteor.publish('theSubCategory', function(){
  return Category.find();
});

Meteor.publish('theSubscription', function(){
  return Subscriptions.find();
});
