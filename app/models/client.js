import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    avgMarkup: DS.attr('number'),
    quotes: DS.attr('number')
});
