<template>
  <div class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[800px] h-[600px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative mt-2 mr-2">
    <div class="card flex justify-content-center">
        <Textarea v-model="text" rows="1" cols="20" disabled style="margin: auto;" class="centered-textarea" />
    </div>
    <div class="flex justify-between">
      <div class="flex-col gap-2">
        <div class="input-container">
          <label for="username">รหัสสินค้า</label>
          <InputText id="username" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
        <div class="input-container">
          <label for="address">ชื่อสินค้า</label>
          <InputText id="address" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
        <div class="input-container">
          <label for="zipcode">ราคา</label>
          <InputText id="zipcode" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
        <div class="input-container">
          <label for="phone">หน่วย</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
        <div class="input-container">
          <label for="phone">จำนวน</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
        <div class="input-container">
          <label for="phone">หมวดหมู่</label>
          <InputText id="phone" v-model="value" class="w-[250px] h-[40px]"/>
        </div>
      </div>
      <div class="bg-gray-300 w-[100px] h-full"></div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const text = ref('เพิ่มรายการสินค้า');
</script>

<style>
.centered-textarea {
  margin: auto;
  text-align: center;
}
.input-container {
  display: flex;
  flex-direction: column;
}
</style>