<template>
    <div class="products-list">
        <div class="row">
            <div class="col" v-for="card in productList" :key="card.id">
                <product-card :productInfo="card"></product-card>
            </div>
        </div>
    </div>
</template>

<script>
const url = './data/products.json';

import ProductCard from './ProductCard'

export default {
    data: () => ({
        productList: []
    }),

    created() {
       this.axios.get(url)
       .then(response => response.data)
       .then(data => {
           this.productList = data;
       })
    },

    computed: {

    },

    components: {
        ProductCard
    }
}
</script>