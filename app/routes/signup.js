import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  model: function(){
    return this.store.createRecord('user');
  },

  actions: {
    save: function(){
      return this.get('currentModel').save()
      .then(function(){
        alert("Flawless Victory!");
      })
      .catch(function(){
        alert("Fatality");
      });
    }
  }
});
