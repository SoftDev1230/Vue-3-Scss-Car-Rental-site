<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { closeAllModals, closeModal, confirmModal, openModal } from '../../lib'
import { mdiHeartOutline, mdiShareVariant, mdiClose } from '@mdi/js';
</script>

<template>
    <div class="model">
        <div class="model-title-line">
            <p class="model-title">Report This Vehicle</p>
            <div class="model-close-icon"><svg-icon type="mdi" :path="mdiClose" @click="closeAllModals()"></svg-icon></div>
        </div>
        <div class="model-radio">
            <div class="model-radio-line">
                <input class="radio1" type="radio">
                <p>This Is Not Actual Vehicle</p>
            </div>
            <div class="model-radio-line">
                <input id="radio2" type="radio">
                <p>This Is A Scam</p>
            </div>
            <div class="model-radio-line">
                <input id="radio3" type="radio">
                <p>This Is Offensive</p>
            </div>
            <div class="model-radio-line">
                <input id="radio4" type="radio">
                <p>This Listing Does Not Exist</p>
            </div>
            <div class="model-radio-line">
                <input id="radio5" type="radio">
                <p>Something Else</p>
            </div>
            <div class="model-textarea-line">
                <textarea placeholder=""></textarea>
            </div>
            <div class="model-button-line">
                <button class="model-cancel" @click="closeAllModals()">Cancel</button>
                <button class="model-submit"
                    @click="() => { closeAllModals(); confirmModal({ value: 'some values' }) }">Submit</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.model {
    background-color: white;
    border-radius: 25px;
    box-shadow: $drop-shadow;
    width: 700px;
    padding: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 111;
    transform: translate(-50%, -50%);
}

.model-title-line {
    display: flex;
    justify-content: space-between;
}

.model-title {
    font-size: 22px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    // font-family: Poppins;
    font-weight: medium;
    line-height: 32px;
    margin-top: auto;
    margin-bottom: auto;
}

.model-close-icon {
    height: 50px;
    width: 50px;
    color: #777777;
    border-radius: 50%;
    background-color: #F9F9F9;
    text-align: center;
}

.model-close-icon svg {
    // margin-top: auto;
    // margin-bottom: auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    cursor: pointer;
}

.model-radio {
    margin-top: 50px;
}

.model-radio-line {
    margin-bottom: 15px;
    display: flex;
}

.model-radio-line p {
    font-size: 16px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    color: 1E202C;
    font-weight: medium;
    margin-top: auto;
    margin-bottom: auto;
}

.model-radio input {
    width: 16px;
    height: 16px;
    margin-right: 15px;
    margin-top: auto;
    margin-bottom: auto;

}

.radio1:checked {
    background-color: #F67810;
}

.model-textarea-line {
    margin-top: 15px;
}

.model-textarea-line textarea {
    height: 80px;
    width: 100%;
    border-radius: 6px;
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #777777;
}


.model-button-line {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
}

.model-cancel {
    width: 150px;
    height: 50px;
    border: 1px solid #F67810;
    border-radius: 25px;
    color: #F67810;
    padding: 12px 14px 12px 18px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

}

.model-submit {
    width: 150px;
    height: 50px;
    color: white;
    border-radius: 25px;
    background-color: #F67810;
    padding: 12px 14px 12px 14px;
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

}

.img-box {
    border-radius: $medium-radius;
    box-shadow: $drop-shadow;

    img {
        // width: 1120px;
        width: 100%;

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

            }
        }

        .favourite {
            padding: 26px;
            display: flex;
            align-items: center;
            justify-content: space-between;

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
