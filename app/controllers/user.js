import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
        createUser: function(newName) {
            // Create the new Todo model
            var user = this.store.createRecord('user', {
                name: newName,
                company: ' test2',
                email: 'test@test.com',
                password: '1234',
                admin: true,
                online: true
            });

            // Clear the "New client" text field
            this.set('newName', '');

            // Save the new model
            user.save();
        },

        destroyRecord: function(model) {

            model.destroyRecord();

        },
    }
});
