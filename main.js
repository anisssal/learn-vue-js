const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            reviews: []
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                    break;
                }
            }
        },
        reviewSubmitted($review){

            this.reviews.push($review);
        }
    },
    computed: {
        isReviewListShow(){
            return this.reviews.length > 0;
        }
    }
})
