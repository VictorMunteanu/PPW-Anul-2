    // EX.1    

var app1 = new Vue({


    el: '#app1',

    data: {
        username: "Munteanu Victor - Evaluare - Vue.js - IS21Z - 15.04.2021",
    }
})
    // EX.2

var app2 = new Vue({

    el: '#app2',

    data: {
        year: new Date(),
    },

    computed: {
        age() {
            return new Date().getFullYear() - new Date(this.year).getFullYear();
        }
    }
})  

    // EX.3

const app3 = new Vue({
    el: '#app3',
    data: {
        Javascript: 1,
        Python: 0.7,
        Java: 1.3,
        Exp: 0,
        Salary: 0
            
    },
    computed: {

    },
    watch: {
           
    }
})