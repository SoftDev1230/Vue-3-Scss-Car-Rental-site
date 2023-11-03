<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>

  <main>
    <RouterView />
  </main>
  <!-- <Dashboard /> -->
  <footer>
    <AppFooter></AppFooter>
  </footer>
</template>

<style lang="css">
body {
  font-family: poppins;
}
</style>
