import Ember from 'ember';

export default Ember.Component.extend({
  template: function(context) {
    var environment = context.get('myEnvironment');
    return '<p>My environment is: <strong class="current-environment">' + environment + '</strong></p>';
  }
});
