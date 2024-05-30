<template>
  <!-- กล่องที่ 1 -->
  <div class="flex">
    <div class="flex flex-col gap-5 h-[70px] text-[16px] font-semibold rounded-t-lg bg-[white] p-4 relative mt-2 mr-2">
      <div class="flex">
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
            class="ml-2 block w-[910px] h-[40px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-full mr-2">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            v-for="product in filteredProducts"
            :key="product.product_id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm">
              {{ product.product_id }}
            </th>
            <td class="px-6 py-4">{{ product.product_name }}</td>
            <td class="px-6 py-4">{{ product.product_Price }}</td>
            <td class="px-6 py-4">{{ product.product_amount }}</td>
            <td class="px-6 py-4">{{ product.product_type }}</td>
            <td class="px-6 py-4">{{ product.product_category }}</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" @click="goToEdit(product)">แก้ไขสต็อก</a>
            </td>
            <td class="flex items-center px-6 py-4">
              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">ลบสินค้า</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="addproduct" :class="['ease-in-out', 'duration-200', { 'w-0 h-0 translate-x-[999px]': OpenEdit }]">
      <edit :open="OpenEdit" :product="productToEdit" @product-updated="handleProductUpdated" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import edit from "./add/editsalestock.vue";
import { useNuxtApp } from "#app";

const selectedCategory = ref<string | undefined>();
const category = ref([
  { name: "คลังสินค้าที่ขาย", code: "SA" },
  { name: "คลังสินค้าที่สต็อก", code: "ST" },
]);

const router = useRouter();
const searchProduct = ref<string>("");
const OpenEdit = ref(true);
const products = ref([]);
const addsearch = ref(false);
const addproduct = ref(false);
const productToEdit = ref(null);

const goToEdit = (product) => {
  productToEdit.value = product;
  addproduct.value = !addproduct.value;
  addsearch.value = !addsearch.value;
  OpenEdit.value = !OpenEdit.value;
};

const { $axios } = useNuxtApp();

const getData = async () => {
  try {
    const resp = await $axios.get("http://10.5.41.89:8000/api/products/GetAllProduct");
    console.log("API response:", resp.data);
    products.value = resp.data.data.products;
    console.log("Products array:", products.value);
  } catch (err) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:", err);
  }
};

const handleProductUpdated = async (updatedProduct) => {
  const index = products.value.findIndex(product => product.product_id === updatedProduct.product_id);
  if (index !== -1) {
    products.value[index] = updatedProduct;
    addproduct.value = false;
    addsearch.value = false;
    OpenEdit.value = true;

    // Fetch updated data
    await getData();
  }
};

const filteredProducts = computed(() => {
  let filtered = products.value;
  if (searchProduct.value) {
    filtered = filtered.filter((product) =>
      product.product_name.toLowerCase().includes(searchProduct.value.toLowerCase())
    );
  }
  if (selectedCategory.value) {
    filtered = filtered.filter((product) => product.product_category === selectedCategory.value);
  }
  return filtered;
});

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
}
</style>
