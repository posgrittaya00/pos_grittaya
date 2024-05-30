<template>
  <div class="flex gap-2 mt-2 mr-2">
    <div
      :class="addproduct ? 'w-[700px]' : 'w-full'"
      class="flex flex-col gap-4 w-full h-[250px] text-[16px] font-semibold rounded-lg rounded-tr-lg bg-[white] relative"
    >
      <div class="flex shadow-[0px_4px_4px_rgb(0,0,0,0.25)] py-4 rounded-b-md">
        <div class="px-3 w-full">
          <div class="flex justify-between gap-5 items-center">
            <span>
              <Dropdown
                v-model="selectedStatus"
                :options="status"
                optionLabel="name"
                placeholder="สถานะ"
                class="w-[170px] h-[40px]"
                @change="filterProducts"
              />
            </span>
            <span>
              <Dropdown
                v-model="selectedCategory"
                :options="category"
                optionLabel="name"
                placeholder="หมวดหมู่"
                class="w-[170px] h-[40px]"
              />
            </span>
            <form class="w-full" @submit.prevent="filterProducts">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
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
                  required
                  :class="addsearch == false ? 'w-[230px]' : 'w-full'"
                  @input="filterProducts"
                />
              </div>
            </form>
            <Button
              icon="pi pi-plus"
              class="w-[100px] h-[40px] text-lg bg-[#326035] mr-2"
              @click="goTosalecreate"
              rounded
            />
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-full">
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
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="product in filteredProducts"
                :key="product.product_id"
                class="text-sm bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm"
                >
                  {{ product.product_id }}
                </th>
                <td class="px-6 py-4">{{ product.product_name }}</td>
                <td class="px-6 py-4">{{ product.product_Price }}</td>
                <td class="px-6 py-4">{{ product.product_amount }}</td>
                <td class="px-6 py-4">{{ product.product_type }}</td>
                <td class="px-6 py-4">{{ product.product_category }}</td>
                <td class="px-6 py-4">
                  <label class="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >ไม่พร้อมขาย</span
                    >
                  </label>
                </td>
                <td class="flex items-center px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-sm text-red-600 dark:text-red-500 hover:underline ms-3"
                    >ลบสินค้า</a
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
        { 'w-0 h-0 translate-x-[999px]': OpenSaleCreate },
      ]"
    >
      <salecreate
        :open="OpenSaleCreate"
        @product-created="handleProductCreated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import salecreate from "./partial/salecreate.vue";
import { useNuxtApp } from "#app";

const router = useRouter();
const OpenSaleCreate = ref(true);
const addproduct = ref(false);
const addsearch = ref(false);
const products = ref([]);

const goTosalecreate = () => {
  addproduct.value = !addproduct.value;
  addsearch.value = !addsearch.value;
  OpenSaleCreate.value = !OpenSaleCreate.value;
};

const searchProduct = ref<string>("");

const { $axios } = useNuxtApp();

definePageMeta({
  layout: "default",
});

const selectedStatus = ref<string | undefined>();
const status = ref([
  { name: "พร้อมขาย", code: "Y" },
  { name: "ไม่พร้อมขาย", code: "N" },
]);

const selectedCategory = ref<string | undefined>();
const category = ref([
  { name: "ของใช้ทั่วไป", code: "IT" },
  { name: "อาหารแห้ง", code: "DF" },
  { name: "บรรจุภัณฑ์", code: "PG" },
  { name: "เครื่องดื่ม", code: "DR" },
  { name: "ยา", code: "MD" },
  { name: "วัสดุสิ้นเปลือง", code: "CS" }
]);

const getData = async () => {
  try {
    const resp = await $axios.get(
      "http://10.5.41.89:8000/api/products/GetAllProduct"
    );
    console.log("API response:", resp.data); // Debugging line
    products.value = resp.data.data.products; // Ensure correct path to products
    console.log("Products array:", products.value); // Debugging line
  } catch (err) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:", err);
  }
};

const handleProductCreated = async (response) => {
  console.log("Response received:", response); // Log the response object
  const newProduct = response.data;
  if (newProduct) {
    products.value.push(newProduct);
    addproduct.value = false;
    addsearch.value = false;
    OpenSaleCreate.value = true;

    // Fetch updated data
    await getData();
  } else {
    console.warn("Received invalid product data.");
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
  if (selectedCategory.value) {
    filtered = filtered.filter(
      (product) => product.product_category === selectedCategory.value
    );
  }
  if (selectedStatus.value) {
    filtered = filtered.filter(
      (product) => product.product_status === selectedStatus.value
    );
  }
  return filtered;
});

const filterProducts = () => {
  // This function is intentionally left blank as the filtering is done automatically by the computed property
};

onMounted(() => {
  getData();
});
</script>

<style>
.placeholder-shift::placeholder {
  color: #999;
  font-size: 14px;
  transform: translateY(-2px);
}

.relative .pi-search {
  transform: translateY(-50%);
}

.relative .pi-search {
  top: 60%;
  left: 10px;
  transform: translateY(-50%);
  color: #999;
}
</style>
