<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="bg-[#FFFFFF] text-black w-[300px] flex-shrink-0">
      <ul class="w-full flex flex-col">
        <li class="flex justify-center w-full items-center text-[24px]" v-for="item in navigationMenu" :key="item.id">
          <NuxtLink
            :to="item.path"
            class="gap-2 h-[100px] px-10 w-full rounded hover:bg-[#CDDAD2] flex items-center justify-center"
          >
            <i :class="item.icon" style="font-size: 30px"></i>
            <p class="w-full">
              {{ item.page }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { navigationMenu } from "./component/sidebarObject";
</script>

<style lang="scss" scoped></style>
