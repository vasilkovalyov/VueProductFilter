<template>
    <div class="product-top-panel">
        <span class="find-info">7,618 results found in 5ms</span>
        <div class="sort-panel" ref="sort">
            <el-select v-model="value" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <div class="btn-wrap">
                <button class="btn-view btn-view__wishlist" v-on:click="wishlistToggle()" :class="{ 'active': activeWishlist}">
                    <span class="icon-heart"></span>
                </button>
                <button class="btn-view btn-view__cart" v-on:click="cartToggle()" :class="{ 'active': activeCart}">
                    <span class="icon-shopping-bag"></span>
                </button>
                <button class="btn-view btn-view__product-view" v-on:click="productViewToggle()" :class="{ 'active': activeProductView}">
                    <span class="icon-grid"></span>
                </button>
                <button class="btn-view btn-view__aside-toggle" v-on:click="asideToggle()" :class="{ 'active': activeAsideToggle}">
                    <span class="icon-menu"></span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data: () => ({
        options: [
            {
                value: 'Default',
                label: 'Default'
            }, 
            {
                value: 'price-up',
                label: 'Increasing price'
            }, 
            {
                value: 'price-down',
                label: 'Decrease price'
            }, 
            {
                value: 'rating-up',
                label: 'Increasing rating'
            }, 
            {
                value: 'rating-down',
                label: 'Decrease rating'
            } 
        ],
        value: 'Default',
        activeAsideToggle: false,
        activeProductView: false,
        activeCart: false,
        activeWishlist: false
    }),

    methods: {
        asideToggle() {
            this.activeAsideToggle = !this.activeAsideToggle;

            const aside = document.querySelector('.aside');
            aside.classList.toggle('hide');
        },

        productViewToggle() {
            this.activeProductView = !this.activeProductView;

            const gridView = document.querySelector('.products-list');
            console.log(gridView);
            gridView.classList.toggle('grid-view');
        },

        cartToggle() {
            this.activeCart = !this.activeCart;
        },

        wishlistToggle() {
            this.activeWishlist = !this.activeWishlist;
        }
    }
}

</script>