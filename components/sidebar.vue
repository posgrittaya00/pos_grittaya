<script setup>
import { navigationMenu } from "./component/sidebarObject";
import { useRoute } from "vue-router";
const route = useRoute();

const currentPath = ref(route.path);

watch(() => route.path, (newPath) => {
  currentPath.value = newPath;
});
</script>

<template>
  <div class="bg-[#FFFFFF] flex min-h-screen">
    <!-- Sidebar -->
    <div class="font-bold text-black w-[220px] flex-shrink-0">
      <ul class="w-full flex flex-col">
        <li :class="[
          'flex justify-center w-full items-center text-[16px]',
          { 'bg-slate-500': currentPath == item.path }
        ]" v-for="item in navigationMenu" :key="item.id">
          <NuxtLink :to="item.path"
            class="ease duration-75 gap-2 h-[100px] px-10 w-full rounded hover:bg-[#CDDAD2] flex items-center justify-center">
            <i :class="item.icon" style="font-size: 20px "  ></i>
            <p class="w-full">
              {{ item.page }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
