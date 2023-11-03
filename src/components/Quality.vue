<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import { reactive, toRefs, ref, onMounted } from 'vue'
const questions = [
    {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }, {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }, {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }, {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }, {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }, {
        caption: 'How do I pick up the car?',
        content: "Your ride will be parked on the street at 3832 Market Street. Once your trip is about to start I will send you pick up instructions(where the key is, how to unlock the car)."
    }
];
const questionednums = ref(2);
const isMore = ref(true);
const postText = ref("");

const btnText = ref(`View all ${questions.length} Questions`)
function questionAll() {
    questionednums.value = questionednums.value === questions.length ? 2 : questions.length;
    btnText.value = questionednums.value === questions.length ? 'View 2 Questions'
        : `View all ${questions.length} Questions`;
    isMore.value = questionednums.value === questions.length ? false : true;
}

function handlePost() {
    // ../assets/img/car.png(postText.value)
}
</script>
<template>
    <div class="quality">
        <h4 class="sub-title">Q&A</h4>
        <TransitionGroup tag="div" name="fade" :key="index" class="container empty-top-10">
            <div v-for="(question, index) in questions.slice(0, questionednums)" :key="index">
                <div class="text-content empty-y-10">
                    <div class="sub-caption">
                        {{ question.caption }}
                    </div>
                    <div class="content empty-top-10">
                        {{ question.content }}
                    </div>
                </div>
            </div>
        </TransitionGroup>
        <div class="viewall">
            <div><span @click="questionAll()">{{ btnText }}</span></div>
            <div class="icon">
                <svg-icon type="mdi" :path="isMore ? mdiChevronDown : mdiChevronUp" width="24" height="24"></svg-icon>
            </div>
        </div>
        <div class="post">
            <div><input type="input" class="question" v-model="postText" /></div>
            <div class="button-wrapper">
                <button class="btn" @click="handlePost">Post</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.quality {
    color: $main-color-g;

    .sub-title {
        font-size: $sub-header;
        line-height: 32px;
        color: $main-color-d;
    }

    .text-content {
        font-size: $text-sm;
        border-radius: $medium-radius;
        border: solid 1px $main-color-g;
        padding: 20px 20px;

        .empty-top-10 {
            padding-top: 10px;
        }

        .content {
            padding-left: 20px;
        }
    }

    .empty-top-10 {
        padding-top: 10px;
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
        margin-bottom: 20px;
    }

    .post {
        .question {
            padding: 8px 0 8px 11px;
            border: solid 1px $main-color-g;
            border-radius: 6px;
            width: 100%;
            height: 40px;
        }

        .button-wrapper {
            padding-top: 20px;
            display: flex;
            flex-direction: row-reverse;

            .btn {
                background-color: inherit;
                color: $main-color-y;
                border: solid 1px $main-color-y;
                padding: 12px 14px 12px 18px;
                width: 150px;
                height: 50px;
                border-radius: $medium-radius;
                cursor: pointer;
            }
        }
    }
}
</style>