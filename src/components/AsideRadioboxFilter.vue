<template>
    <div class="aside__filter-item">
        <span class="aside__filter-caption">Multi Range</span>
        <el-radio-group class="aside__radio-list" v-model="radio">
            <div class="aside__radio-list__item">
                <el-radio :label="1">$10</el-radio>
            </div>
            <div class="aside__radio-list__item">
                <el-radio :label="2">$10-$100</el-radio>
            </div>
            <div class="aside__radio-list__item">
                <el-radio :label="3">$100-$500</el-radio>
            </div>
            <div class="aside__radio-list__item">
                <el-radio :label="4">$500</el-radio>
            </div>
            <div class="aside__radio-list__item">
                <el-radio :label="5">All</el-radio>
            </div>
        </el-radio-group>
        {{radio}}
    </div>
</template>
<script>

export default {
    data: () => ({
        radio: 1
    })
}

</script>