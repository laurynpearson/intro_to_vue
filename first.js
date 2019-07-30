var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    first: 0,
    second: 0,
    third: 0,
    sum: 0
  },
  methods: {
    computeSum: function() {
      var first = document.getElementById("first").value;
      console.log(this.first);
    }
  }
});
