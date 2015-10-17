import DS from 'ember-data';

var Work = DS.Model.extend({
  type: DS.attr(),
  title: DS.attr(),
  catalogNumber: DS.attr(),
  releaseDate: DS.attr("date"),
  description: DS.attr(),
  isActive: DS.attr(),
  roles: DS.hasMany("role", {async: true}),
  workParts: DS.hasMany("workPart"),
  tags: DS.hasMany("tag"),
  coverImage: DS.attr()
});

Work.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: "manga",
      title: "Yosho no Hana no Himitsu",
      catalogNumber: "yolo",
      releaseDate: "2015-10-10 20:57",
      description: "",
      isActive: true,
      roles: [1],
      coverImage: "/assets/images/temp/P001.jpg"
    },
    {
      id: 2,
      type: "doujin",
      title: "What is this thing called love? 2",
      catalogNumber: "ayy",
      releaseDate: "2015-01-12 07:43",
      description: "",
      isActive: true,
      roles: [2],
      coverImage: "/assets/images/temp/01.jpg"
    }
  ]
});

export default Work;