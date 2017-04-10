import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.inject.service(),

  sets: Ember.computed.alias('data.sets'),
  challenges: Ember.computed.alias('sets.challenges')
});
