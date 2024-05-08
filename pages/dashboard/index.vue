<template>
    <div class="flex flex-wrap">
    <!-- Line 1 -->
        <div class="flex w-full">
            <div class="w-1/4 h-140 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2 mt-2" style="height: 140px;">
                <div>
                    <h3 class="text-lg font-semibold mb-2">ยอดขายทั้งหมด</h3>
                    <p class="text-2xl font-bold">1,000,000 บาท</p>
                </div>
                <div class="rounded-full w-12 h-12 bg-blue-500 -mt-4 -mr-4 flex items-center justify-center">
                    <i class="pi pi-chart-bar text-white" style="font-size: 1.5rem"></i>
                </div>
            </div>
            <div class="w-1/4 h-140 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2 mt-2" style="height: 140px;">
                <div>
                    <h3 class="text-lg font-semibold mb-2">ต้นทุนทั้งหมด</h3>
                    <p class="text-2xl font-bold">500,000 บาท</p>
                </div>
                <div class="rounded-full w-12 h-12 bg-blue-500 -mt-4 -mr-4 flex items-center justify-center">
                    <i class="pi pi-gift text-white" style="font-size: 1.5rem"></i>
                </div>
            </div>
            <div class="w-1/4 h-140 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2 mt-2" style="height: 140px;">
                <div>
                    <h3 class="text-lg font-semibold mb-2">กำไรทั้งหมด</h3>
                    <p class="text-2xl font-bold">500,000 บาท</p>
                </div>
                <div class="rounded-full w-12 h-12 bg-blue-500 -mt-4 -mr-4 flex items-center justify-center">
                    <i class="pi pi-ticket text-white" style="font-size: 1.5rem"></i>
                </div>
            </div>
            <div class="w-1/4 h-140 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2 mt-2" style="height: 140px;">
                <div>
                    <h3 class="text-lg font-semibold mb-2">ออเดอร์ทั้งหมด</h3>
                    <p class="text-2xl font-bold">100 รายการ</p>
                </div>
                <div class="rounded-full w-12 h-12 bg-blue-500 -mt-4 -mr-4 flex items-center justify-center">
                    <i class="pi pi-list-check text-white" style="font-size: 1.5rem"></i>
                </div>
            </div>
        </div>

    <!-- Line 2 -->
    <div class="flex w-full">
        <div class="w-3/5 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2" style="height: 532px;">
            <h3 class="text-lg font-semibold mb-2">สถิติการขาย</h3>
            <p class="text-2xl font-bold">รายได้เฉลี่ยต่อวัน: 50,000 บาท</p>
            <p class="text-2xl font-bold">จำนวนคำสั่งซื้อเฉลี่ยต่อวัน: 10 รายการ</p>
        </div>
        <div class="w-2/5 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2" style="height: 532px;">
            <h3 class="text-lg font-semibold mb-2">สินค้าขายดี</h3>
            <p class="text-2xl font-bold">1. Product A</p>
            <p class="text-2xl font-bold">2. Product B</p>
        </div>
    </div>

    <!-- Line 3 -->
    <div class="w-3/5 bg-white p-4 rounded-lg shadow-lg text-black mr-2 mb-2" style="height: auto;">
        <h3 class="text-lg font-semibold mb-2">ประวัติการทำรายการ</h3>
        <p class="text-2xl font-bold">วันที่ 01/05/2024: รายการใหม่ 10 รายการ</p>
        <p class="text-2xl font-bold">วันที่ 02/05/2024: รายการใหม่ 15 รายการ</p>
        <p class="text-2xl font-bold">วันที่ 03/05/2024: รายการใหม่ 20 รายการ</p>
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