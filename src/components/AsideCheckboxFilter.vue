<template>
    <div class="aside__filter-item">
        <span class="aside__filter-caption">{{captionFilter}}</span>
        <el-checkbox-group v-model="checkList" >
            <div class="checkbox-list">
                <div class="aside__checkbox-list__item"  v-for="(item, i) in filterArray" :key="i+1">
                    <el-checkbox :label="item.value" v-model="checkList"></el-checkbox>
                    <span class="counter-product">0</span>
                </div>
            </div>
        </el-checkbox-group>
        {{checkList}}
    </div>
</template>
<script>
export default {
    props: ['captionFilter', 'filterArray'],

    data: () => ({
        checkList: []
    })
}
</script>