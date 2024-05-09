<template>
    <div>
        <div class="pi pi-shopping-bag text-[16px] font-semibold mr-2 mt-2 rounded-lg bg-white p-4 ">ออเดอร์ทั้งหมด</div>
        <span class="relative">
            <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
            <InputText v-model="value1" placeholder="ค้นหาออเดอร์" class="pl-10 w-[300px] h-[40px] text-lg" />
        </span>
    <div>
        <div class="flex gap-2 w-[1200px] h-[300px] text-[16px] font-semibold rounded-lg bg-white p-4">สถานะออเดอร์</div>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss" scoped>

</style>