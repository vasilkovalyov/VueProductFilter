<template>
    <aside class="aside">
        <span class="aside__caption">Filters</span>
        <div class="aside__holder">
            <aside-radiobox-filter></aside-radiobox-filter>
            <aside-checkbox-filter captionFilter="Category" :filterArray="categoryFilterArray"></aside-checkbox-filter>
            <aside-checkbox-filter captionFilter="Brand" :filterArray="brandFilterArray"></aside-checkbox-filter>
            <aside-raiting-filter captionFilter="Raitiing"></aside-raiting-filter>
        </div>
    </aside>
</template>
<script>
import AsideRadioboxFilter from './AsideRadioboxFilter'
import AsideCheckboxFilter from './AsideCheckboxFilter'
import AsideRaitingFilter from './AsideRaitingFilter'


export default {
    data: () => ({
        categoryFilterArray: [  
            { value: 'Category value 1' },
            { value: 'Category value 2' },
            { value: 'Category value 3' },
            { value: 'Category value 4' }
        ],
        brandFilterArray: [
            { value: 'Brand value 1' },
            { value: 'Brand value 2' },
            { value: 'Brand value 3' },
            { value: 'Brand value 4' }
        ],

    }),

    components: {
        AsideRadioboxFilter,
        AsideCheckboxFilter,
        AsideRaitingFilter
    }
}

</script>