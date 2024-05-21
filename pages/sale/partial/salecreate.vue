<template>
  <div
    class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[550px] h-[600px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative mr-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]">
    <div class="card flex justify-content-center">
      <span
        class=" max-w-full w-full text-center py-2 rounded-full border border-[#000000] text-[18px]">เพิ่มสินค้า</span>
      <!-- <Textarea v-model="text" rows="1" cols="20" disabled style="margin: auto;" class="centered-textarea" /> -->
    </div>
    <div class="flex justify-between gap-2">
      <div class="flex-col gap-2">
        <div class="flex flex-col gap-1 mt-1">
          <label for="username">รหัสสินค้า</label>
          <InputText id="username" v-model="value" class="w-[250px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="address">ชื่อสินค้า</label>
          <InputText id="address" v-model="value" class="w-[250px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="zipcode">ราคา</label>
          <InputText id="zipcode" v-model="value" class="w-[250px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="phone">หน่วย</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="phone">จำนวน</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="phone">หมวดหมู่</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]" />
        </div>
      </div>
      <div class="container">
        <div class="bg-gray-300 w-[250px] h-full rounded-md flex justify-center items-center">
          <span class="pi pi-plus-circle" style="font-size: 2rem;"></span>
          <div>เพิ่มรูปภาพสินค้า</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
defineProps({
  open: Boolean,
})
const text = ref('เพิ่มรายการสินค้า');
</script>
