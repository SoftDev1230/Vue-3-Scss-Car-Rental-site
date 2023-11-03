<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartOutline, mdiShareVariant, mdiCardsHeart } from '@mdi/js';
import { ref } from 'vue';
const isfill = ref(false);
function addFavourite() {
    isfill.value = !isfill.value
}
function allowShare() {
    // alert("Are you sure?")
}
</script>

<template>
    <div class="img-box">
        <img alt="car" src="../assets/img/car.png" height="500" style="width: 100%;" />

        <div class="caption">
            <div class="first">
                <div class="text-box">
                    BMW X3 2020
                </div>
                <div class="review">
                    <div class="stars">
                        <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                        <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                        <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                        <img alt="star" src="../assets/icons/downstar.png" width="17.31" height="17.31" />
                        <img alt="star" src="../assets/icons/downstar.png" width="17.31" height="17.31" />
                    </div>
                    <span>(15 reviews)</span>
                </div>

            </div>
            <div class="empty-div">
            </div>
            <div class="favourite">
                <div class="action-btn empty" @click="addFavourite()">
                    <div class="icon">
                        <svg-icon type="mdi" :path="isfill ? mdiCardsHeart : mdiHeartOutline" width="30"
                            height="30"></svg-icon>
                    </div>
                    <a class="btn">
                        Add to Favourites
                    </a>
                </div>
                <div class="action-btn" @click="allowShare">
                    <div class="icon">
                        <svg-icon type="mdi" :path="mdiShareVariant" width="30" height="30"></svg-icon>
                    </div>
                    <div>
                        <a class="btn">
                            Share
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-box {
    border-radius: $medium-radius;
    box-shadow: $drop-shadow;
    background-color: $main-color-w;

    img {
        // width: 1120px;
        // width: 100%;
        border-radius: $medium-radius $medium-radius 0 0;
    }

    .caption {
        padding: 30px;
        display: flex;
        justify-content: space-between;

        .first {
            color: $main-color-g;
            height: 82px;
            width: 238px;

            .text-box {
                font-size: 34px;
                line-height: 51px;
            }

            .review {
                width: 190px;
                height: 21px;
                display: flex;
                align-items: center;
                font-size: 14px;
                word-spacing: 2px;

                .stars {
                    display: flex;
                    align-items: center;

                    img {
                        padding: 2px;
                        cursor: pointer;
                    }

                    img:hover {}
                }
            }
        }

        .favourite {
            padding: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            .icon {
                padding-right: 10px;
            }

            .action-btn {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .empty {
                padding-right: 50px;
            }
        }
    }
}
</style>
