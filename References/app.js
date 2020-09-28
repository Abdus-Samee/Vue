var one = new Vue({
    el: '#vue-app-one',
    data: {
        food: ''
    },
    methods: {
        go: function(){
            this.food = this.$refs.name.value;
            // for a div test, it would work as this.$refs.test.innerText;
        }
    }
});
