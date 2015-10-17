import DS from 'ember-data';

var Role = DS.Model.extend({
  work: DS.belongsTo("work", {async: true}),
  creator: DS.belongsTo("creator", {async: true}),
  role: DS.attr("string")
});

Role.reopenClass({
  FIXTURES: [
    {
      id: 1,
      work: 1,
      creator: 1,
      role: "artist"
    },
    {
      id: 2,
      work: 2,
      creator: 2,
      role: "artist"
    }
  ]
});

export default Role;