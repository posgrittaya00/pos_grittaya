<template>
    <div class="flex">
        <div class="pi pi-shopping-bag text-[16px] font-semibold mr-2 mt-2 rounded-lg bg-white p-4 ">ออเดอร์ทั้งหมด</div>
        <span class="relative">
            <InputText v-model="value1" placeholder="ค้นหาออเดอร์" class="w-[300px] h-[40px] mr-2 mt-3"/>
            <i class="pi pi-search absolute top-2/4 -mt-1 right-5 text-surface-400 dark:text-surface-600"/>
        </span>
        <span class="buttoncreate">
            <Button label="สร้างออเดอร์" icon="pi pi-plus-circle" class="w-[200px] h-[40px] text-lg bg-[green] mr-2 mt-3"/>
        </span>
    </div>
    <div class="flex">
    <div class="flex justify-between gap-2 w-[1200px] h-[300px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative">
        <div>
            <span class="block mb-3">สถานะออเดอร์</span>
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
            </span>
        </div>
        <input type="datetime-local" id="meeting-time"
               name="meeting-time" value="2024-05-10T19:30"
               class="rounded-lg border border-gray-300 shadow-sm h-[40px]">
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