<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiBellOutline, mdiHeartOutline } from '@mdi/js';
import { ref } from 'vue';
const isAccount = ref(false);
const placeholderText = "Vehicle | Location | Duration";
let searchText = "";

function showAccountPanel() {
  isAccount.value = true;
}
function hiddenAccountPanel() {
  isAccount.value = false;
}
</script>

<template>
  <div class="appheader">
    <div class="header-part logo-wrapper">
      <a href="/" class="logo-link">
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="82" height="60" />
      </a>
    </div>

    <div class="header-part search">
      <input type="text" v-model="searchText" :placeholder="placeholderText" />
      <img alt="search icon" class="search-icon nav-link" src="../assets/search-icon.svg" width="24" height="24" />
    </div>

    <ul class="header-part tools">
      <li class="nav-item">
        <router-link to="/book">
          <font-awesome-icon icon="fa fa-book-open" />
        </router-link>
        <!-- <div class="panel" :class="{ active: isActive }">
          This is book panel
        </div> -->
      </li>
      <li class="nav-item">
        <router-link to="/heart">
          <svg-icon type="mdi" :path="mdiHeartOutline"></svg-icon>
        </router-link>
        <!-- <div class="panel">
          This is favourite panel
        </div> -->
      </li>
      <li class="nav-item">
        <router-link to="/notification">
          <svg-icon type="mdi" :path="mdiBellOutline"></svg-icon>
        </router-link>

        <!-- <div class="panel">
          This is nofication panel
        </div> -->
      </li>
      <li class="nav-item avatar" @click="showAccountPanel">
        <img alt="avatar" src="../assets/img/avatar.svg" width="48" height="48" />
      </li>

    </ul>
    <div class="account-panel" :class="{ active: isAccount }">
      <ul @click="hiddenAccountPanel">
        <li>Profile</li>
        <li>log out</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.appheader {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 80px;
  width: 100%;
  height: 90px;
  box-shadow: $drop-shadow;
  background: $main-color-dw;
  z-index: 99;

  .account-panel {
    display: none;
    position: absolute;
    top: 95px;
    right: 50px;
    background-color: $main-color-dw;
    color: $main-color-d;
    padding: 1rem;
    transition: .2s;
    border-radius: $small-radius;

    ul {
      list-style-type: none;

      li {
        padding: 1rem 2rem;
        cursor: pointer;
      }

      li:hover {
        background: rgba($color: #000000, $alpha: 0.12);
      }

    }
  }

  .account-panel.active {
    display: block;
  }

  .logo-link {
    cursor: pointer;
  }

  .search {
    position: relative;
    display: flex;

    input {
      border-radius: 22px;
      border: solid 1px $main-color-g;
      padding: 10px 30px;
      width: 376px;
    }

    img {
      position: absolute;
      right: 28px;
      top: 10px;
      padding: 2px;
    }
  }

  .tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    .nav-item:first {
      padding: 0 20px 0 0;
    }

    .nav-item {
      padding: 0 20px;
      cursor: pointer;
      transition: .5s;
    }

    .nav-item:hover,
    .nav-item:focus {
      top: -4px;
      color: $main-color-g;
      // padding: 0 15px;
    }

    .nav-item:end {
      padding: 0 0 0 20px;
    }

    .avatar img {
      border-radius: 50%;
    }

    .nav-item {}
  }
}

@media (min-width: 1024px) {}
</style>
