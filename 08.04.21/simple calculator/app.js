var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operand: " "
    },
    computed: {
        suma(){
            return +this.a + +this.b;
        },
        dif(){
            return +this.a - +this.b;
        },
        multy(){
            return +this.a * +this.b;
        },
        divide(){
            return +this.a / +this.b;
        }
    }
})