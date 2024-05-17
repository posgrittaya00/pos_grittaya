<template>
    <div class="flex">
      <div  class="flex justify-between">
        <span class="mt-1">
          <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="สถานะ" class="w-full md:w-[8rem]" />
        </span>
        <span class="mt-1">
          <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="หมวดหมู่" class="w-full md:w-[9rem]" />
        </span>
        <span class="relative">
          <InputText v-model="value1" placeholder="ค้นหาออเดอร์" class="w-[300px] h-[40px] mr-2 mt-3 pl-10 placeholder-shift" />
          <i class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 text-surface-400 dark:text-surface-600"/>
        </span>
        <span class="buttoncreate">
          <Button icon="pi pi-plus" class="w-[100px] h-[40px] text-lg bg-[#326035] mr-2 mt-3" @click="goTosalecreate"/>
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4 w-[1200px] h-[300px] text-[16px] font-semibold rounded-b-lg rounded-tr-lg bg-[white] p-4 relative">
      <div class="flex w-full">
        <div class="flex w-full justify-evenly bg-[#FFFFFF] text-[#000000] rounded-lg p-2">
          <DataTable :value="products" tableStyle="min-width: 72rem">
            <Column field="code" header="รหัสสินค้า"></Column>
            <Column field="name" header="ชื่อสินค้า"></Column>
            <Column field="price" header="ราคา"></Column>
            <Column field="quantity" header="จำนวน"></Column>
            <Column field="unit" header="หน่วย"></Column>
            <Column field="category" header="หมวดหมู่"></Column>
            <Column field="status" header="สถานะ"></Column>
          </DataTable>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goTosalecreate = () => {
router.push('/sale/salecreate');
};

definePageMeta({
layout: 'default'
})
</script>

<style>
.placeholder-shift::placeholder {
color: #999; /* ตัวอย่างสีของ placeholder */
font-size: 14px; /* ตัวอย่างขนาดของ placeholder */
transform: translateY(-2px); /* ขยับ placeholder ลงหรือขึ้นตามต้องการ */
}

.relative .pi-search {
transform: translateY(-50%);
}

.relative .pi-search {
top: 60%; /* ปรับค่าตรงนี้เพื่อขยับไอคอนขึ้นหรือลง */
left: 10px; /* ปรับค่าตรงนี้เพื่อขยับไอคอนไปทางซ้ายหรือขวา */
transform: translateY(-50%);
color: #999; /* ตัวอย่างสีของไอคอน */
}
</style>