<template>
  <div class="flex">
    <div :class="OpenEdit == true ? 'w-full' : ''">
      <!-- Container 1 -->
      <div class="flex gap-2 mt-2 mr-2">
        <div
          :class="addproduct ? 'w-[900px]' : 'w-full'"
          class="flex flex-col gap-4 w-full text-[16px] font-semibold rounded-t-lg bg-white relative mr-2"
        >
          <div class="flex shadow py-4 rounded-b-md">
            <div class="px-3 w-full">
              <div class="flex justify-between gap-5 items-center">
                <div>
                  <select
                    @change="filterCategory('category')"
                    v-model="categoryValue"
                    class="w-[200px] h-[40px] bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option
                      v-for="(item, index) in category"
                      :key="index"
                      :value="item.name"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
                <div></div>
                <form class="w-full">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >Search</label
                  >
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      v-model="searchProduct"
                      type="search"
                      id="default-search"
                      class="block w-full h-[40px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="ค้นหาสินค้า"
                      @input="filterCategory('search')"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Container 2 -->
      <div class="flex w-full">
        <div
          class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-full mr-2"
        >
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">รหัสสินค้า</th>
                <th scope="col" class="px-6 py-3">ชื่อสินค้า</th>
                <th scope="col" class="px-6 py-3">ราคา</th>
                <th scope="col" class="px-6 py-3">จำนวน</th>
                <th scope="col" class="px-6 py-3">หน่วย</th>
                <th scope="col" class="px-6 py-3">หมวดหมู่</th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="product in filteredProducts"
                :key="product.product_id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm"
                >
                  {{ textcut(product.product_id) }}
                </th>
                <td class="px-6 py-4">{{ product.product_name }}</td>
                <td class="px-6 py-4">{{ product.product_Price }}</td>
                <td class="px-6 py-4">{{ product.product_amount }}</td>
                <td class="px-6 py-4">{{ product.product_type }}</td>
                <td class="px-6 py-4">{{ product.product_category }}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    @click="goToEdit(product)"
                    >แก้ไขสต็อก</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="addproduct"
      :class="[
        'ease-in-out',
        'duration-200',
        { 'w-0 h-0 translate-x-[1200px]': OpenEdit },
      ]"
    >
      <func-edit
        v-if="productToEdit"
        :open="OpenEdit"
        :product="productToEdit"
        @product-updated="handleProductUpdated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import funcEdit from "./add/editsalestock.vue";
import { useNuxtApp } from "#app";

const categoryValue = ref<string>("");

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
    const resp = await $axios.get(
      "http://10.5.41.89:8000/api/products/GetAllProduct"
    );
    console.log("API response:", resp.data);
    products.value = resp.data.data.products;
    console.log("Products array:", products.value);
  } catch (err) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:", err);
  }
};

const handleProductUpdated = async (updatedProduct) => {
  const index = products.value.findIndex(
    (product) => product.product_id === updatedProduct.product_id
  );
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
      product.product_name
        .toLowerCase()
        .includes(searchProduct.value.toLowerCase())
    );
  }
  if (categoryValue.value && categoryValue.value !== "คลังสินค้าที่ขาย") {
    filtered = filtered.filter(
      (product) => product.product_category === categoryValue.value
    );
  }
  return filtered;
});

const textcut = (string: string) => {
  if (string.length > 5) {
    string = string.substring(0, 4) + "...";
  }
  return string;
};

const filterCategory = (type: string) => {
  // This function is intentionally left blank as the filtering is done automatically by the computed property
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
}
</style>
