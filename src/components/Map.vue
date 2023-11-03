<script setup>
import { reactive, ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker, mdiMapMinus, mdiChevronDown, mdiChevronUp } from '@mdi/js';

const enableMapping = ref(false);
function setGoogleMap() {
    enableMapping.value = !(enableMapping.value);
};

</script>
<template>
    <div class="map empty-top-50">
        <div class="action-bar">
            <a class="btn" @click="setGoogleMap">
                <div class="icon empty-right-10">
                    <svg-icon type="mdi" :path="mdiMapMarker" width="24" height="24"></svg-icon>
                </div>
                <div>
                    <span class="empty-right-10">London123</span>
                    <span>(5Miles Away)</span>
                </div>
            </a>
            <a class="btn" @click="setGoogleMap">
                <div class="icon empty-right-10">
                    <svg-icon type="mdi" :path="mdiMapMinus" width="24" height="24"></svg-icon>
                </div>
                <div>
                    <span class="empty-right-10">Map</span>
                </div>
                <div class="icon empty-right-10">
                    <svg-icon type="mdi" :path="enableMapping ? mdiChevronUp : mdiChevronDown" width="24"
                        height="24"></svg-icon>
                </div>
            </a>
        </div>
        <div class="map-contents empty-top-20" v-if="enableMapping">
            <GMapMap :center="{ lat: 51.5072, lng: 0.1276 }" :zoom="10" map-type-id="terrain" style="height: 20rem"
                :options="{
                    zoomControl: true,
                    mapTypeControl: true,
                    scaleControl: true,
                    streetViewControl: true,
                    rotateControl: true,
                    fullscreenControl: true
                }" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.empty-top-50 {
    padding-top: 50px;
}

.empty-right-10 {
    padding-right: 10px;
}

.map {
    .action-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a.btn {
            display: flex;
            align-items: center;
            color: $main-color-g;
            cursor: pointer;
        }
    }

    .empty-top-20 {
        padding-top: 20px;
    }

    .map-contents {
        border-radius: 10px;
        color: $main-color-y;
        // height: 250px;
        padding: 0;
    }
}
</style>