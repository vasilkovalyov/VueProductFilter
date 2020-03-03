<template>
    <div class="aside__filter-item">
        <span class="aside__filter-caption">{{captionFilter}}</span>
        <div class="aside-rating-list">
            <div class="aside-rating-list__item" v-for="(starListItem, i) in raitingArray" :key="i+1" >
                <label :for="`radio-${i+1}`" >
                    <input type="radio" :value="starListItem.raitingCount" :id="`radio-${i+1}`" v-model="raitingChoose">
                    <ul class="raiting-star-list">
                        <li class="raiting-star-list__item" v-for="(starItem, j) in raitingArray" :key="j+1">
                            <span class="icon-star" :class="{active: j+1 <= starListItem.raitingCount}"></span>
                        </li>
                    </ul>
                    <span class="text">&amp; Up</span>
                    <span class="counter-product">0</span>
                </label>
            </div>
            {{raitingChoose}}
        </div>
    </div>
</template>
<script>
export default {
    props: ['captionFilter'],

    data: () => ({
        raitingChoose: null,
        raitingArray: [
            { raitingCount: 5 },
            { raitingCount: 4 },
            { raitingCount: 3 },
            { raitingCount: 2 },
            { raitingCount: 1 }
        ]
    })
}
</script>