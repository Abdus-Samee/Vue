new Vue({
    el: '#vue-app',
    data: {
        name: 'Abdus Samee',
        job: 'Student',
        website: 'https://www.google.com',
        age: 21,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc){
            this.age += inc;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});