<template>
    <div class="product-card">
        <div class="product-card__image">
            <img :src="productInfo.img" :alt="productInfo.title" />
        </div>
        <div class="product-card__body">
            <div class="product-card__header-info">
                <span class="product-card__rating">{{productInfo.raiting}}<span class="icon-star"></span></span>
                <span class="product-card__price">${{productInfo.price}}</span>
            </div>
            <div class="product-card__caption-holder">
                <span class="product-card__title">{{productInfo.title}}</span>
                <span class="product-card__subtitle">{{productInfo.description}}</span>
            </div>
        </div>
        <div class="product-card__grid-info">
            <div class="product-card__header-info">
                <span class="product-card__rating">{{productInfo.raiting}}<span class="icon-star"></span></span>
                <span class="product-card__price">${{productInfo.price}}</span>
            </div>
            <div class="product-card__btn-wrap">
                <button class="product-card__btn product-card__btn-wishlist" v-on:click="toggleProductToWishList(productInfo)" :class="{ 'active': isActiveWish}">
                    <span class="icon-heart"></span>
                    <span>wishlist</span>
                </button>
                <button class="product-card__btn product-card__btn-to-cart">
                    <span class="icon-shopping-bag"></span>
                    <span>add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['productInfo'],
        
        data: () => ({
            isActiveWish: false
        }),

        methods: {
            toggleProductToWishList(product) {
                this.isActiveWish = !this.isActiveWish;
                this.$store.dispatch('toggleProductToWishList', product);
            }
        },

        computed: {
            
        }
    }
</script>