new Vue({
  el: '#vue-app',
  data: {
    name: 'Big C',
    job: 'Baller'
  },
  methods: {
    greet: function(people) {
      return 'What is up my ' + people + ', ' + this.name + ' is in the building';
    }
  }
});
