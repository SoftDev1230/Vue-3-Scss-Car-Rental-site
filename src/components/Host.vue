<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlertOctagonOutline } from '@mdi/js';
</script>
<template>
    <div class="host empty-y-50">
        <h4 class="sub-title">Host</h4>
        <div class="host-contents empty-top-20">
            <div class="review-wrapper">
                <div>
                    <img alt="img" class="review-img" src="../assets/img/caravatar.svg" width="75" height="75" />
                </div>
                <h5 class="review-star">
                    <div class="star-num">
                        4.5
                    </div>
                    <div>
                        <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                    </div>
                    <div>(12)</div>
                </h5>
            </div>
            <div class="rent-wrapper empty-left-20">
                <h4 class="caption">Rent A Car</h4>
                <h4 class="rent-date empty-top-10">Joined Jan 2023</h4>
                <h4 class="rent-content empty-top-10">
                    <div class="check-rent empty-right-10">
                        <svg-icon type="mdi" :path="mdiAlertOctagonOutline" width="24" height="24"></svg-icon>
                    </div>
                    <div>
                        Level 2 Host
                    </div>
                </h4>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.host {
    color: $main-color-g;

    .sub-title {
        font-size: $sub-header;
        line-height: 32px;
        color: $main-color-d;
    }

    .empty-top-20 {
        padding-top: 20px;
    }

    .host-contents {
        display: flex;
        align-items: center;

        .empty-left-20 {
            padding-left: 20px;
        }

        .review-wrapper {
            position: relative;

            .review-img {
                border-radius: 50%;
            }

            .review-star {
                position: absolute;
                bottom: -8px;
                left: 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: white;
                border-radius: $medium-radius;
            }

            .star-num {
                columns: $main-color_y;
            }
        }

        .rent-wrapper {
            .empty-top-10 {
                padding-top: 10px;
            }

            .caption {
                color: $main-color-d;
                font-size: 16px;
            }

            .rent-date {
                font-size: 14px;
            }

            .rent-content {
                .check-rent {
                    color: $main-color-y;
                }

                .empty-right-10 {
                    padding-right: 10px;
                }

                font-size: 14px;
                display: flex;
                align-items: center;
            }
        }

    }
}
</style>