<template>
  <!-- กล่องที่ 1 -->
  <div class="flex">
    <div
      class="flex flex-col gap-4 w-full h-[70px] text-[16px] font-semibold rounded-t-lg bg-[white] p-4 relative mt-2 mr-2"
    >
      <div class="flex justify-between">
        <Dropdown
          v-model="selectedCategory"
          editable
          :options="category"
          optionLabel="name"
          placeholder="หมวดหมู่คลังสินค้า"
          class="w-[250px] h-[40px]"
        />
        <span class="relative" iconPosition="left">
          <i
            class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 text-surface-400 dark:text-surface-600"
          />
          <input
            v-model="searchProduct"
            type="search"
            id="default-search"
            class="block w-full h-[40px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ค้นหาสินค้า"
            required
            :class="addsearch == false ? 'w-[230px]' : 'w-full'"
          />
        </span>
      </div>
    </div>
  </div>
  <!-- กล่องที่ 2 -->
  <div class="flex w-full">
    <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-full">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
            <th scope="col" class="px-6 py-3">ชื่อสินค้า</th>
            <th scope="col" class="px-6 py-3">ราคา</th>
            <th scope="col" class="px-6 py-3">จำนวน</th>
            <th scope="col" class="px-6 py-3">หน่วย</th>
            <th scope="col" class="px-6 py-3">หมวดหมู่</th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              12345
            </th>
            <td class="px-6 py-4">มาม่า</td>
            <td class="px-6 py-4">7</td>
            <td class="px-6 py-4">10</td>
            <td class="px-6 py-4">ซอง</td>
            <td class="px-6 py-4">อาหารแห้ง</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >แก้ไขสต็อก</a
              >
            </td>
            <td class="flex items-center px-6 py-4">
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >ลบสินค้า</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCategory = ref(null);
const category = ref([
  { name: "คลังสินค้าที่ขาย", code: "SA" },
  { name: "คลังสินค้าที่สต็อก", code: "ST" },
]);
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
}
</style>
