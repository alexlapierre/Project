Router.route('/', {
    template: 'login'
});

Router.route('/events', {
    template: 'eventList'
});

Router.route('/event-builder', {
    template: 'eventBuilder'
});

Router.route('/status/:_id', {
    template: 'addStatusForm',
    data : function(){
      var currentEventID = this.params._id;
      Session.set('eventID', currentEventID);

    }
});
