<template>
  <div class="bg-[#E2E2E2] min-h-screen">
    <div class="relative">
      <navbar class="fixed top-0 left-0 right-0 z-10" />
      <div class="min-w-screen-xl flex gap-2 pt-24 mt-1">
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

</style>
