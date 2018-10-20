new Vue({
  el: '#vue-app',
  data: {
    name: 'Big C',
    job: 'Baller',
    website: 'https://www.charlesjewell.com',
    websiteTag: '<a href="https://www.charlesjewell.com">Here</a>',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(people) {
      return 'What is up my ' + people + ', ' + this.name + ' is in the building';
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    }
  }
});
