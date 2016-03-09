Template.eventBuilder.rendered = function() {
    this.autorun(
      function() {
        $(".eventForm").show();
        $(".categoryForm").hide();
        $(".eventBuilderTable").hide();
      }
    );
  };
