<template>
    <section class="section-products">
        <div class="container">
            <Aside></Aside>
            <div class="section-content">
                <product-top-panel ></product-top-panel>
                <search-product></search-product>
                <products-list></products-list>
            </div>
        </div>
    </section>
</template>

<script>

import Aside from '../components/Aside'
import ProductTopPanel from '../components/ProductTopPanel'
import SearchProduct from '../components/SearchProduct'
import ProductsList from '../components/ProductsList'


export default {
    components: {
        Aside,
        ProductTopPanel,
        SearchProduct,
        ProductsList
    }
}

</script>
