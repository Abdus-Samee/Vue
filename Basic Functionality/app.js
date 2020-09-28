new Vue({
    el: '#vue-app',
    data: {
        name: 'Abdus Samee',
        job: 'Student',
        website: 'https://www.google.com',
        age: 21,
        x: 0,
        y: 0,
        text: '',
        available: false,
        nearby: false,
        success: false,
        error: false,
        courses: [
            {id: 'CSE-103', sub: 'Discrete math'},
            {id: 'CSE-107', sub: 'OOP'}
        ]
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
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
