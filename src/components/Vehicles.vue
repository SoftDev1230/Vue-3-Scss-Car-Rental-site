<script setup>
import { defineComponent } from 'vue'
import { shuffle as _shuffle } from 'lodash-es'
import { reactive, toRefs, ref } from 'vue'
import { onMounted, computed } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeft, mdiArrowRight, mdiHeartOutline, mdiCardsHeart } from '@mdi/js';
import { FwbCarousel } from 'flowbite-vue';
import {
    GSCarousel,
    GSLayoutDefault,
    GSLayoutNumeric
} from 'gitart-scroll-carousel';
// import 'gitart-scroll-carousel/dist/ExampleLayoutDefault.css'

const pictures = [
    [
        { src: './src/assets/img/car3.png', alt: 'Image 1' },
        { src: './src/assets/img/car2.png', alt: 'Image 2' },
        { src: './src/assets/img/car1.png', alt: 'Image 3' },
    ], [
        { src: './src/assets/img/car1.png', alt: 'Image 1' },
        { src: './src/assets/img/car2.png', alt: 'Image 2' },
        { src: './src/assets/img/car3.png', alt: 'Image 3' },
    ], [
        { src: './src/assets/img/car3.png', alt: 'Image 1' },
        { src: './src/assets/img/car1.png', alt: 'Image 2' },
        { src: './src/assets/img/car2.png', alt: 'Image 3' },
    ], [
        { src: './src/assets/img/car1.png', alt: 'Image 1' },
        { src: './src/assets/img/car3.png', alt: 'Image 2' },
        { src: './src/assets/img/car2.png', alt: 'Image 3' },
    ], [
        { src: './src/assets/img/car1.png', alt: 'Image 1' },
        { src: './src/assets/img/car2.png', alt: 'Image 2' },
        { src: './src/assets/img/car3.png', alt: 'Image 3' },
    ], [
        { src: './src/assets/img/car2.png', alt: 'Image 1' },
        { src: './src/assets/img/car3.png', alt: 'Image 2' },
        { src: './src/assets/img/car1.png', alt: 'Image 3' },
    ]
]

const getInitialItems = () => [0, 1, 2, 3, 4, 5];

const items = [0, 1, 2, 3, 4, 5]

const start = ref(0);

const currentImage = ref(['', '', '', '', '', '']);
const currentIndex = ref([0, 0, 0, 0, 0, 0]);

const isfills = ref([false, false, false, false, false, false]);
function addFavourite(index) {
    // ../assets/img/car.png(index)
    isfills.value[index] = !isfills.value[index];
}

onMounted(() => {
    setInterval(() => {
        for (var i = 0; i < currentIndex.value.length; i++) {
            currentIndex.value[i] = (currentIndex.value[i] + 1) % pictures[i].length;
            currentImage.value[i] = pictures[i][currentIndex.value[i]].src
        }
    }, 3000);
})

function plusSlides(index, i) {
    currentIndex.value[index] = (currentIndex.value[index] + (i)) % pictures[index].length;
    if (currentIndex.value[index] < 0) {
        currentIndex.value[index] = pictures[index].length - 1;
    }
    currentImage.value[index] = pictures[index][currentIndex.value[index]].src
}

function setSlide(index, i) {
    currentIndex.value[index] = i;
    currentImage.value[index] = pictures[index][currentIndex.value[index]].src
}

</script>
<template>
    <div class="othervehicles">
        <h4 class="sub-title empty-d-20">Other Vehicles Nearby</h4>
        <GSCarousel :items="items" item-gap="0" :items-to-show="3" :layout="GSLayoutDefault" id="gslide">
            <template #item="{ data }" style="padding: 0 88px;">
                <div class="sliderwrapper">
                    <div class="img-wrapper">
                        <div class="slider">
                            <img :src="currentImage[data]" alt="Slider Image">
                            <div class="dots">
                                <span v-for="(img, index) in pictures[data]" :id="img.src" :key="index"
                                    :class="{ active: index == currentIndex[data] }"
                                    @click="() => setSlide(data, index)"></span>
                            </div>

                            <div class="prev">
                                <div class="circle">
                                    <a @click="() => plusSlides(data, -1)">❮</a>
                                </div>
                            </div>
                            <div class="next">
                                <div class="circle">
                                    <a @click="() => plusSlides(data, 1)">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <div class="car-info">
                            <div class="car-id">
                                <h4 class="empty-b-5">
                                    BMW X3
                                </h4>
                                <h4>
                                    2020
                                </h4>
                            </div>
                            <div class="car-price">
                                <h4 class="price-per-day"> £ 90 /day</h4>
                                <h5 class="price-per-day"> £ 90 /day</h5>
                                <h5 class="eat-price"> £ 180 total est.</h5>
                            </div>
                        </div>
                        <div class="car-way empty-top-10">
                            <div class="way empty-right-10">GPS</div>
                            <div class="way empty-right-10">Bluetooth</div>
                            <div class="way">Automatic</div>
                        </div>
                        <div class="car-review empty-top-10">
                            <div class="star">
                                <div class="empty-right-5">
                                    <img alt="star" src="../assets/icons/upstar.png" width="16.67" height="15.83" />
                                </div>
                                <div>
                                    <span>4.5(15)</span>
                                </div>
                            </div>
                            <div class="heart" @click="addFavourite(data)">
                                <svg-icon type="mdi" :path="isfills[data] ? mdiCardsHeart : mdiHeartOutline" width="24"
                                    height="24"></svg-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </GSCarousel>
    </div>
</template>

<style scoped lang="scss">
.othervehicles {
    padding: 50px 0;

    .sub-title {
        font-size: $sub-header;
        line-height: 32px;
        color: $main-color-d;
    }



    #gslider .gsl-default__indicator {
        display: none !important;
    }

    .empty-d-20 {
        padding-bottom: 20px;
    }

    .gsl-default {

        padding: 0 80px !important;

        .gsc-track__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 30px;

            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .gsc-track__item {
                .sliderwrapper {
                    margin-right: 30px;
                    box-shadow: $drop-shadow;
                    border-radius: $medium-radius !important;

                }

                .img-wrapper {
                    // margin-right: 20px;

                    position: relative;

                    .slider {

                        img {
                            border-radius: 25px 25px 0 0;
                            width: 297.33px;
                            height: 133px;
                        }

                        .dots {
                            display: flex;
                            position: absolute;
                            bottom: 10px;
                            left: 50%;
                            transform: translateX(-50%);
                            align-items: center;

                            span {
                                cursor: pointer;
                                height: 12px;
                                width: 12px;
                                margin: 0 5px;
                                background-color: #d9d9d9;
                                border-radius: 50%;
                                display: inline-block;
                                transition: background-color 0.6s ease;

                            }

                            .active {
                                background-color: $main-color-y;
                            }

                        }
                    }


                    .prev,
                    .next {
                        position: absolute;
                        cursor: pointer;
                        top: 50%;
                        width: auto;
                        padding: 16px;
                        margin-top: -22px;

                    }

                    .circle:hover {
                        background-color: rgba(0, 0, 0, 0.8);
                    }

                    .circle {
                        color: white;
                        font-weight: bold;
                        font-size: 13px;
                        transition: 0.6s ease;
                        border-radius: 50%;
                        user-select: none;
                        width: 24px;
                        height: 24px;

                        a {
                            padding: 4px 9px;
                        }
                    }

                    .next {
                        right: 0;
                    }
                }


                .desc {
                    padding: 15px;
                    // margin-right: 20px;

                    .car-info {
                        display: flex;
                        justify-content: space-between;

                        .car-id {
                            color: $main-color-d;
                            font-size: 12px;
                        }

                        .car-price {
                            h4.price-per-day {
                                color: $main-color-d;
                                font-size: 12px;
                            }

                            h5.price-per-day {
                                color: $main-color-g;
                                font-size: 10px;
                            }

                            h5.eat-price {
                                color: $main-color-y;
                                font-size: 10px;
                            }
                        }
                    }

                    .empty-top-10 {
                        padding-top: 10px;
                    }

                    .car-way {
                        display: flex;
                        font-size: 10px;

                        .empty-right-10 {
                            margin-right: 10px;
                        }

                        .way {
                            color: $main-color-g;
                            border-radius: 8px;
                            text-align: center;
                            padding: 1px;
                            border: solid 1px $main-color-g;
                        }
                    }

                    .car-review {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: $main-color-d;

                        .star {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 10px;

                            .empty-right-5 {
                                margin-right: 10px;
                                color: $main-color-d;

                            }
                        }

                        .heart {
                            cursor: pointer;
                        }
                    }
                }

                /* On hover, add a black background color with a little bit see-through */
            }

            .empty-right-10 {
                padding-right: 10px;
            }

            .empty-left-10 {
                padding-left: 10px;
            }
        }

        .gsc-arrow.gsc-arrow--side-left.gsl-default__arrow.gsl-default__arrow--left {
            background-color: $main-color-dw;
            padding: 15px;
            border-radius: 20px;
            border: none;
            // color: $main-color-y;
            cursor: pointer;
            // box-shadow: $drop-shadow;

        }

    }

}
</style>