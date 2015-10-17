import DS from 'ember-data';

var Creator = DS.Model.extend({
  name: DS.attr(),
  aliases: DS.attr(),
  relatedCreators: DS.attr(),
  roles: DS.hasMany("role", {async: true}),
  isGroup: DS.attr(),
});

Creator.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Wanyanaguda",
      aliases: ["saitom", "shindoL"],
      roles: [1],
      isGroup: false
    },
    {
      id: 2,
      name: "Oyari Ashito",
      aliases: ["Shoujo Kishidan"],
      roles: [2],
      isGroup: false
    }
  ]
});

export default Creator;