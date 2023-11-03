<script setup>
// import Vue from 'vue';
import { reactive, toRefs, ref, onMounted } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import ReportModal from './ReportModal.vue';
import { notify } from '@kyvg/vue3-notification'
import { defineAsyncComponent } from 'vue'
import { ModalTarget, openModal } from '../../lib'
import { mdiMapMarker, mdiMapMinus, mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Datepicker from 'vue3-datepicker'
import VueTimePicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";

let objsFrom = [];
let objsUntil = [];

const dateobj = new Date()
objsFrom = dateobj.toString(' ').split(' ');
objsUntil = objsFrom;

const from = ref(`${objsFrom[0]}-${objsFrom[1]}-${objsFrom[2]}`);
const until = from;

const pickedUntil = ref(dateobj)
const pickedFrom = ref(dateobj)
const isDown = ref([false, false, false, false]);

const timepicker = ref({
    timeFormat: "hh:mm AM",
    timeData: {
        hh: "09",
        mm: "15",
        AM: "am",
    }
})

function setOpen(index) {
    isDown.value[index] = true;
}

function setClose(index) {
    isDown.value[index] = false;
}

function showInsurece() {
    openModal(
        defineAsyncComponent(() => import('./InsuranceModal.vue')),
        {
            test: 'modal1'
        },
        {
            modalStyle: {
                align: 'top'
            }
        }
    )
        .then((data) => {
            notify({
                type: 'success',
                title: 'Success modal1',
                text: JSON.stringify(data)
            })
        })
        .catch(() => {
            notify({
                type: 'error',
                title: 'Error modal1'
            })
        })
}
function showReport() {
    openModal(
        defineAsyncComponent(() => import('./ReportModal.vue')),
        {
            test: 'modal1'
        },
        {
            modalStyle: {
                align: 'top'
            }
        }
    )
        .then((data) => {
            notify({
                type: 'success',
                title: 'Success modal1',
                text: JSON.stringify(data)
            })
        })
        .catch(() => {
            notify({
                type: 'error',
                title: 'Error modal1'
            })
        })
};

</script>
<template>
    <div class="pay-contents">
        <div class="right-1">
            <div class="right-title">
                <p class="right-title-1">£ 90/Day</p>
                <p class="right-title-2">Total Payable £120</p>
            </div>
            <div class="right-brief">
                <p class="right-brief-title">£ 10/mil fee for additional miles driven</p>
            </div>
            <div class="right-from">
                <p>From</p>
                <div class="right-form wrapper">
                    <div class="wrapper">
                        <Datepicker v-model="pickedFrom" input-format="EEE-MMM-dd" @opened="() => setOpen(0)"
                            @closed="() => setClose(0)" />
                    </div>
                    <div>
                        <svg-icon type="mdi" :path="!isDown[0] ? mdiChevronDown : mdiChevronUp" width="24"
                            height="24"></svg-icon>
                    </div>
                    <div>
                        <VueTimePicker :format="timepicker.timeFormat" v-model="timepicker.timeData"
                            @open="() => setOpen(1)" @close="() => setClose(1)" />
                    </div>
                    <div>
                        <svg-icon type="mdi" :path="!isDown[1] ? mdiChevronDown : mdiChevronUp" width="24"
                            height="24"></svg-icon>
                    </div>
                </div>

            </div>
            <div class="right-until">
                <p>Until</p>
                <div class="right-form wrapper">
                    <div class="wrapper">
                        <Datepicker v-model="pickedUntil" input-format="EEE-MMM-dd" @opened="() => setOpen(2)"
                            @closed="() => setClose(2)" />
                    </div>
                    <div>
                        <svg-icon type="mdi" :path="!isDown[2] ? mdiChevronDown : mdiChevronUp" width="24"
                            height="24"></svg-icon>
                    </div>
                    <div>
                        <VueTimePicker :format="timepicker.timeFormat" v-model="timepicker.timeData"
                            @open="() => setOpen(3)" @close="() => setClose(3)" />
                    </div>
                    <div>
                        <svg-icon type="mdi" :path="!isDown[3] ? mdiChevronDown : mdiChevronUp" width="24"
                            height="24"></svg-icon>
                    </div>
                </div>
            </div>
            <div class="right-button-line">
                <button class="right-insurancebutton" @click="showInsurece()">Insurance ABC</button>
                <button class="right-continuebutton">Continue</button>
            </div>
        </div>

        <div class="right-2">
            <div class="right2-title">
                <p>Have A Question?</p>
            </div>
            <div class="right-button-line2">
                <button class="right-insurancebutton" @click="showReport()">Contact Host</button>
            </div>
            <div class="right2-brief">
                <p class="right-brief2-title">Cancellation Policy</p>
                <p class="right-brief2-content">*When booking a vehicle on the Vumah platform we allow free cancellations up
                    to 24hrs before the trip start to allow flexibility for our guests.
                    If the guest chooses to cancel for any reason within the 24 hours period of the trip start, the guest
                    will be subject to a late cancellation fee and will be refunded the remainder that ¡s on hold.</p>
            </div>
        </div>
    </div>
    <notifications class="notifications" />
    <ModalTarget />
</template>

<style lang="scss" scoped>
.pay-contents {

    // box-shadow: $drop-shadow;
    // border-radius: $medium-radius;
    // #right.col-right {
    width: 27.5%;
    margin-left: 25px;
    // }
}

.right-1,
.right-2 {
    border-radius: $medium-radius;
    box-shadow: $drop-shadow;
    //  border:1px solid;
    background-color: $main-color-dw;
    padding: 30px;
}

.right-form.wrapper {
    margin: auto;

    // max-width: 250px;
    .hover-input {
        color: #aaa;
        position: absolute;
        top: 0;
    }
}

.vdp-current-date-outline-color {
    color: red
}

.right-title-1 {
    font-size: 22px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    font-weight: medium;
    color: #1E202C;
    text-align: center;
}

.right-title-2 {
    margin-top: 10px;
    font-size: 18px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    font-weight: Regular;
    color: #F67810;
    text-align: center;
}

.right-brief {
    padding: 30px 0 30px 0;
}

.right-brief-title {
    font-size: 12px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    color: #777777;
    text-align: center;
}

.right-from p {
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    color: #1E202C;
    font-weight: medium;
}

.right-from input {
    // margin-top: 10px;
    border: none;
    background-color: inherit;
    padding: 0 4px;
    color: $main-color-dw;
}

.right-until {
    margin-top: 30px;
}

.right-until p {
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    color: #1E202C;
    font-weight: medium;
}

.right-until input {
    // margin-top: 10px;
    border: none;
    background-color: inherit;
    padding: 0 4px;
    color: $main-color-dw;
}

.right-button-line {
    justify-content: center;
}

.right-insurancebutton {
    height: 50px;
    width: 100%;
    border: 1px solid #F67810;
    border-radius: 25px;
    color: #F67810;
    font-size: 16px;
    padding: 12px 14px 12px 18px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
}

.right-continuebutton {
    height: 50px;
    width: 100%;
    color: white;
    font-size: 16px;
    border-radius: 25px;
    background-color: #F67810;
    padding: 12px 14px 12px 14px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    cursor: pointer;

}

.right2-title {
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.right-button-line2 {
    margin-top: 10px;
}

.right2-brief {
    margin-top: 30px;
}

.right-brief2-title {
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
}

.right-brief2-content {
    margin-top: 10px;
    font-size: 14px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    color: #777777;
}

.right-1 {
    margin-bottom: 30px;
}

.right-form {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.right-form input {
    width: 100%;
    font-size: 16px;
}

.right-form svg-icon {
    width: 10%;
}
</style>
