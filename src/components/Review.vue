<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import { reactive, toRefs, ref, onMounted } from 'vue'
const views = [
    {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    }, {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    }, {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    }, {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    }, {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    }, {
        title: '',
        date: '',
        stars: [1, 1, 1, 0, 0],
        caption: 'How do I pick up the car?',
        content: "“All-Star guests the top-rated and most experienced guests on Vumah.”."
    },
];
const viewednums = ref(2);
const postText = ref("");
const isMore = ref(true);

const btnText = ref(`View all ${views.length} Reviews`)
function viewAll() {
    viewednums.value = viewednums.value === views.length ? 2 : views.length;
    btnText.value = viewednums.value === views.length ? 'View 2 Reviews'
        : `View all ${views.length} Reviews`;
    isMore.value = viewednums.value === views.length ? false : true;

}

const getImgUrl = (star) => {
    console.log(star, 'star')
}

</script>
<template>
    <div class="review empty-top-50">
        <h4 class="sub-title">Reviews</h4>
        <TransitionGroup tag="div" name="fade" :key="index" class="container">
            <div v-for="(view, index) in views.slice(0, viewednums)" :key="index">
                <div class="text-content empty-y-10">
                    <div class="sub-caption">
                        <div>
                            <span class="title">
                                {{ view.caption }}
                            </span>
                            <span class="date">
                                {{ view.date }}
                            </span>

                        </div>
                        <div class="stars">
                            <!-- <img alt="star" v-for="star in view.stars" :src="() => getImgUrl(star)" width="17.31"
                                height="17.31" /> -->
                            <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                            <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                            <img alt="star" src="../assets/icons/upstar.png" width="17.31" height="17.31" />
                            <img alt="star" src="../assets/icons/downstar.png" width="17.31" height="17.31" />
                            <img alt="star" src="../assets/icons/downstar.png" width="17.31" height="17.31" />
                        </div>
                    </div>
                    <div class="content empty-top-20">
                        “All-Star guests the top-rated and most experienced guests on Vumah.”
                    </div>
                </div>
            </div>
        </TransitionGroup>

        <div class="viewall" @click="viewAll">
            <div>{{ btnText }}</div>
            <div class="icon">
                <svg-icon type="mdi" :path="isMore ? mdiChevronDown : mdiChevronUp" width="24" height="24"></svg-icon>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.empty-top-50 {
    padding-top: 50px;
}

.review {
    color: $main-color-g;


    .sub-title {
        font-size: $sub-header;
        line-height: 32px;
        color: $main-color-d;
        padding-bottom: 20px;
    }

    .text-content {
        font-size: $text-sm;
        border-radius: $medium-radius;
        border: solid 1px $main-color-g;
        padding: 20px 20px;

        .sub-caption {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title {
                color: $main-color-d;
                font-size: $text-medium;
            }

            .date {
                font-size: $text-sm;
                padding-left: 20px;
            }

            .stars {
                display: flex;

                img {
                    padding: 1px;
                }
            }
        }

        .empty-top-20 {
            padding-top: 20px;
        }
    }

    .empty-y-10 {
        margin: 10px 0;
    }

    .viewall {
        font-size: $text-sm;
        display: flex;
        align-items: center;
        float: right;
        margin-top: 10px;
        cursor: pointer;
    }

}
</style>