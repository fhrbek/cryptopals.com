import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.inject.service(),

  // foos: Ember.computed.alias('data.sets'),
  foos: [
    {id: 1, name: 'Convert hex to base64'}
  ],
  challenges: Ember.computed.alias('sets.challenges')
});
