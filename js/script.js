new Vue({
    el: '#app',
    data: {
        items: [],
        currentValue: ''
    },

    methods: {
        add() {
            this.items.push(this.currentValue);
            this.currentValue = '';
        },
        remove(itemIndex) {
            this.items.splice(itemIndex, 1);
        }
    }

});