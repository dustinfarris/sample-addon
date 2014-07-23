export default {

  name: "sample-addon",

  initialize: function(container, app) {

    var myEnvironment = app.get('MY_ENVIRONMENT');

    app.inject('controller', 'myEnvironment', myEnvironment);
  }
};
