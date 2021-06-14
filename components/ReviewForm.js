app.component('review-form', {
    template: `
    <form class="review-form" @submit.prevent="onSubmitReviewForm">
        <h3>Leave a review</h3>
        <label for="name">Name</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <label for="rating" >Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input type="submit" class="button" value="Submit"/>
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods :{
        onSubmitReviewForm(){
            console.log("tes");
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Please fill out every review field.')
                return
            }
            let productReview ={
                name : this.name ,
                review  : this.review ,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview);
            this.name ='';
            this.rating ='';
            this.review = null;
        },

    }
});