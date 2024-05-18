<template>
  <div class="bg-[#E2E2E2] min-h-screen">
    <div class="relative">
      <navbar class="fixed top-0 left-0 right-0 z-10" />
      <div class="min-w-screen-xl flex gap-2 pt-24">
        <sidebar />
        <div class="w-full h-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
// header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;
//     background-color: white;
//     color: black;
// }

// .navbar-logo {
//     display: flex;
//     align-items: center;
// }

// .navbar-logo img {
//     height: 50px;
//     margin-right: 10px;
// }

// // .content-container {
// //     padding: 20px;
// // }</style>
