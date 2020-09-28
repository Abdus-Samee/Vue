Vue.component('greeting', {
    template: '<p>Howdy {{name}} gang!!!   <button @click="changeName">Change name</p>',
    data: function(){
        return {
            name: 'Yoshi...'
        }
    },
    methods: {
        changeName: function(){
            this.name = "Abdus Samee..."
        }
    }
});

var one = new Vue({
    el: '#vue-app-one'
});

var two = new Vue({
    el: '#vue-app-two'
});
