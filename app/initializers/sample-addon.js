export default {

  name: "sample-addon",

  initialize: function(container, app) {

    var myEnvironment = app.get('MY_ENVIRONMENT');

    app.register('sampleAddon:myEnvironment', myEnvironment, { instantiate: false });
    app.inject('component', 'myEnvironment', 'sampleAddon:myEnvironment');
  }
};
