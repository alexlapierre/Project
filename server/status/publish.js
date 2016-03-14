Meteor.publish('theStatus', function(){
  return Status.find();
});

Meteor.publish('theCategorys', function(){
  return Category.find();
});
