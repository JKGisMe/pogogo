import Ember from 'ember';

const {Route, inject} = Ember;

export default Route.extend({
  session: inject.service(),
  flashMessages: inject.service(),

  model(){
    return {
      email: '',
      password: ''
    };
  },
  actions: {
    doLogin(){
      const user = this.get('currentModel');
      this.get('session')
        .authenticate(
          'authenticator:pogogo', user.email, user.password
        ).then(() => {
        this.get('flashMessages').success('Logged in!');
      }).catch((response) => {
        const {errors} = response;

        if(errors.mapBy('code').indexOf(401) >= 0){
          this.get('flashMessages').danger('Username or password was wrong!');
        } else {
          this.get('flashMessages').danger('Server error');
        }
      });
    }
  }
});
