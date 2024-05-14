<template>
        <div class="flex">
          <div  class="flex justify-between">
            <span>
              <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-[14rem]" />
            </span>
            <span>
              <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-[14rem]" />
            </span> 
          </div>
          <div class="flex w-full">
            <div class="flex w-full justify-evenly bg-[#FFFFFF] text-[#000000] rounded-lg p-2">
                <span class="block ">รหัสสินค้า</span>
                <span class="block ">ชื่อสินค้า</span>
                <span class="block ">ราคา</span>
                <span class="block ">จำนวน</span>
                <span class="block ">หน่วย</span>
                <span class="block ">หมวดหมู่</span>
                <span class="block ">สถานะ</span>
            </div>
          </div>
        </div>
</template>

<script setup>

</script>

<style>

</style>