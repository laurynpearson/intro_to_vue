var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    showInfo: true
  },
  methods: {
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
    }
  }
});
