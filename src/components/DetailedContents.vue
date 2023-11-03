<script setup>
import Features from './Features.vue';
import Map from './Map.vue';
import Description from './Description.vue';
import OwnerCondition from './OwnerCondition.vue';
import Host from './Host.vue';
import Quality from './Quality.vue';
import Review from './Review.vue';

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlertOctagonOutline } from '@mdi/js';
</script>

<template>
    <div class="detailed-contents">
        <Features />
        <Map></Map>
        <Description></Description>
        <div class="report empty-y-50">
            <a class="btn">
                <div class="icon empty-right-10">
                    <svg-icon type="mdi" :path="mdiAlertOctagonOutline" width="20" height="20"></svg-icon>
                </div>
                <div>
                    Report Vehicle
                </div>
            </a>
        </div>
        <OwnerCondition></OwnerCondition>
        <Host></Host>
        <Quality></Quality>
        <Review></Review>

    </div>
</template>

<style lang="scss" scoped>
.detailed-contents {
    box-shadow: $drop-shadow;
    border-radius: $medium-radius;
    padding: 30px;
    background-color: $main-color-w;
    width: 82.5%;
    margin-right: 25px;

    .empty-y-50 {
        padding: 50px 0px;
    }

    .report {
        a.btn {
            float: right;
            display: flex;
            color: $main-color-y;
            cursor: pointer;

            .empty-right-10 {
                padding-right: 10px;
            }
        }
    }
}
</style>
