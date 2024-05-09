<template>
  <div class="bg-[#E2E2E2] min-h-screen">
    <div>
      <navbar />
      <div class="max-w-screen-xl flex gap-2">
        <sidebar />
        <div class="w-full">
            <slot/>
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
// // }
</style>
