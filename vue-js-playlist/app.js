
Vue.component('hey', {
  template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change</button></p>',
  data: function() {
    return {
      name: 'Chico'
    };
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app',
  data: {
    name: 'Big C',
    job: 'Baller',
    website: 'https://www.charlesjewell.com',
    websiteTag: '<a href="https://www.charlesjewell.com">Here</a>',
    age: 25,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    migos: ['Quavo', 'Offset', 'Takeoff'],
    rappers: [
      {name: 'Drake', town: 'Toronto'},
      {name: 'Future', town: 'Atlanta'},
      {name: 'Kendrick', town: 'Compton'}
    ],
    health: 100,
    ended: false
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
      this.y = e.offsetY;
    },
    logName: function() {
      console.log('name');
    },
    logAge: function() {
      console.log('age');
    },
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {
    addToA: function() {
      console.log('a');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('b');
      return this.b + this.age;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }

});
