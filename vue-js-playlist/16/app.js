
new Vue({
  el: '#vue-app',
  data: {
    output: 'No.1 forever'
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.input.value);
      this.output = this.$refs.input.value;
    }
  },
  computed: {

  }

});
