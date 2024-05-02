<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <div class="bg-[#FFFFFF] text-black w-[300px] flex-shrink-0">
            <div>
                <ul v-for="item in navigationMenu" :key="item.id">
                    <li class="flex items-center text-[24px]">
                        <NuxtLink :to="item.path"
                            class=" h-[100px] w-[300px] rounded hover:bg-[#CDDAD2] flex items-center justify-center">
                            <i :class="item.icon" style="font-size: 2rem"></i>
                            {{ item.page }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>

<script setup>
import { navigationMenu } from './component/sidebarObject'


</script>

<style lang="scss" scoped></style>