import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      email: '',
      password: ''
    };
  },
  actions: {
    doLogin(){
      console.info('Do Login');
    }
  }
});
