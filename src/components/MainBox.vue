<script setup>
import DetailedContents from "./DetailedContents.vue";
import PayContents from "./PayContents.vue";
import Vehicles from "./Vehicles.vue"
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft, mdiArrowRight, mdiHeartOutline } from '@mdi/js';

</script>

<template>
    <div class="main-box">
        <DetailedContents class="col-left" id="left"></DetailedContents>
        <PayContents class="col-right" id="right"></PayContents>
    </div>
    <Vehicles></Vehicles>
</template>

<style lang="scss" scoped>
.main-box {
    padding-top: 85px;
    display: flex;
    justify-content: space-between;
}
</style>
