import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
        createClient: function(newName) {
            // Create the new Todo model
            var client = this.store.createRecord('client', {
                name: newName,
                avgMarkup: 2,
                quotes: 1
            });

            // Clear the "New client" text field
            this.set('newName', '');

            // Save the new model
            client.save();
        },

        destroyRecord: function(model) {

            model.destroyRecord();

        }
    }
});
