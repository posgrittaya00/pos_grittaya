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
          class="w-[250px] h-[40px] mt-3"
        />
        <span class="relative" iconPosition="left">
          <i
            class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 text-surface-400 dark:text-surface-600"
          />
          <InputText
            v-model="value1"
            placeholder="ค้นหาสินค้า"
            class="w-[900px] h-[40px] mr-2 mt-3 pl-10 placeholder-shift"
          />
        </span>
      </div>
    </div>
  </div>
  <!-- กล่องที่ 2 -->
  <div class="flex">
    <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <!-- <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th> -->
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Accessories</th>
            <th scope="col" class="px-6 py-3">Available</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Weight</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <!-- <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td> -->
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">Yes</td>
            <td class="px-6 py-4">Yes</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">3.0 lb.</td>
            <td class="flex items-center px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const selectedCategory = ref();
const category = ref([
  { name: "คลังสินค้าที่ขาย", code: "SA" }, //อย่าลืมแก้
  { name: "คลังสินค้าที่สต็อก", code: "ST" },
]);
</script>

<style lang="scss" scoped></style>
