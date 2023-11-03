<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

import { mdiBluetooth, mdiSwapVertical, mdiUsb, mdiCarElectric, mdiCrosshairsGps, mdiGestureSpread } from '@mdi/js';
</script>
<template>
    <div class="features">
        <h4 class="sub-title">Features</h4>
        <div class="empty-top-20 wrapper">
            <div class="feature-column empty-right-50">
                <div class="feature-item">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiSwapVertical" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Automatic Geabox
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiUsb" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Bluetooth
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiCarElectric" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Electric
                    </div>
                </div>
            </div>
            <div class="feature-column empty-right-50">
                <div class="feature-item">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiSwapVertical" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Automatic Geabox
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiGestureSpread" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Electric
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiCarElectric" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Electric
                    </div>
                </div>
            </div>
            <div class="feature-column">
                <div class="feature-item">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiSwapVertical" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Automatic Geabox
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiUsb" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Bluetooth
                    </div>
                </div>
                <div class="feature-item empty-top-10">
                    <div class="icon empty-right-10">
                        <svg-icon type="mdi" :path="mdiCarElectric" width="24" height="24"></svg-icon>
                    </div>
                    <div class="text">
                        Electric
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.features {
    .sub-title {
        font-size: $sub-header;
        line-height: 32px;
        color: $main-color-d;
    }

    .empty-top-20 {
        padding-top: 20px;
    }

    .wrapper {
        display: flex;
        align-items: center;

        .empty-right-50 {
            padding-right: 50px;
        }

        .feature-item {
            color: $main-color-g;
            display: flex;
            align-items: center;

            .empty-right-10 {
                padding-right: 10px;
            }
        }

        .empty-top-10 {
            padding-top: 10px;
        }
    }

}
</style>