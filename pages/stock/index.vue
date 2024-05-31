<template>
  <div class="flex gap-2 mt-2 mr-2">
    <div
      :class="addproduct ? 'w-[700px]' : 'w-full'"
      class="flex flex-col gap-4 w-full text-[16px] font-semibold rounded-lg bg-white relative"
    >
      <div class="flex shadow py-4 rounded-b-md">
        <div class="px-3 w-full">
          <div class="flex justify-between gap-5 items-center">
            <div>
              <select
                @change="filterCategory('status')"
                v-model="statusValue"
                class="w-[150px] h-[40px] bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option
                  v-for="(item, index) in status"
                  :key="index"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div>
              <select
                @change="filterCategory('category')"
                v-model="categoryValue"
                class="w-[150px] bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            <form class="w-full">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
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
            <Button
              icon="pi pi-plus"
              class="w-[100px] h-[40px] text-lg bg-[#326035] mr-2"
              @click="goTosalecreate"
              rounded
            ></Button>
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <div class="relative overflow-x-auto shadow-md sm:rounded-b-lg w-full">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-l text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
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
                v-for="Setproduct in filteredSetProducts"
                :key="product.product_id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ textcut(setproduct.setproduct_id) }}
                </th>
                <td class="px-6 py-4">{{ setproduct.setproduct_name }}</td>
                <td class="px-6 py-4">{{ setproduct.setproduct_Price }}</td>
                <td class="px-6 py-4">{{ setproduct.setproduct_amount }}</td>
                <td class="px-6 py-4">{{ setproduct.setproduct_type }}</td>
                <td class="px-6 py-4">{{ setproduct.setproduct_category }}</td>
                <td class="px-6 py-4">
                  <label class="inline-flex items-center mb-5 cursor-pointer">
                    <input
                      type="checkbox"
                      class="sr-only"
                      :value="setproduct.status"
                      :class="setproduct.status === 1 ? 'peer' : ' checked'"
                      @click="toggleSale(setproduct.setproduct_id, setproduct.status)"
                    />
                    <div
                      class="relative w-11 h-6 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                      :class="
                        setproduct.status == 0
                          ? 'bg-gray-200'
                          : 'bg-blue-600 after:translate-x-full'
                      "
                    ></div>
                    <span
                      class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >{{
                        setproduct.status === 0 ? "ไม่พร้อมขาย" : "พร้อมขาย"
                      }}</span
                    >
                  </label>
                </td>

                <td class="flex items-center px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-sm text-red-600 dark:text-red-500 hover:underline ml-3"
                    @click="removeSetProduct(setproduct.setproduct_id)"
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
      v-if="addsetproduct"
      :class="[
        'ease-in-out',
        'duration-200',
        { 'w-0 h-0 translate-x-[999px]': OpenSaleCreate },
      ]"
    >
      <salecreate
        :open="OpenSaleCreate"
        @setproduct-created="handleSetroductCreated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import salecreate from "./new/stockcreate.vue";
import { useNuxtApp } from "#app";
import Swal from "sweetalert2";

interface showData {
  name: string;
  amount: number;
}

interface SetProduct {
  name: string;
  price: number;
  amount: number;
}

const setproduct = [
  {
    name: "A",
    price: 100,
    amount: 3,
  },
  {
    name: "B",
    price: 100,
    amount: 10,
  },
  {
    name: "C",
    price: 100,
    amount: 1,
  },
];

const router = useRouter();
const OpenSaleCreate = ref(true);
const addsetproduct = ref(false);
const addsearch = ref(false);
const setproducts = ref([]);
const setproducts_default = ref([]);

const goTosalecreate = () => {
  addsetproduct.value = !addsetproduct.value;
  addsearch.value = !addsearch.value;
  OpenSaleCreate.value = !OpenSaleCreate.value;
};

const searchSetProduct = ref<string>("");
const statusToggle = ref<string>("");
const categoryValue = ref<string>("ทั้งหมด");
const statusValue = ref<string>("พร้อมขาย");

const { $axios } = useNuxtApp();

definePageMeta({
  layout: "default",
});

const status = ref([
  { name: "พร้อมขาย", code: "Y" },
  { name: "ไม่พร้อมขาย", code: "N" },
]);
const category = ref([
  { name: "ทั้งหมด", code: "ALL" },
  { name: "ของใช้ทั่วไป", code: "IT" },
  { name: "อาหารแห้ง", code: "DF" },
  { name: "บรรจุภัณฑ์", code: "PG" },
  { name: "เครื่องดื่ม", code: "DR" },
  { name: "ยา", code: "MD" },
  { name: "วัสดุสิ้นเปลือง", code: "CS" },
]);

const getData = async () => {
  try {
    const resp = await $axios.get(
      "http://10.5.41.89:8000/api/setproducts/GetSetProduct"
    );

    setproducts.value = resp.data.data.setproducts;
    setproducts_default.value = resp.data.data.setproducts;

    const mapData = setproducts.value.reduce(
      (accumulator: any[], currentSetProduct) => {
        if (currentSetProduct.setproduct_amount < 5) {
          accumulator.push(currentSetProduct);
        }
        return accumulator;
      },
      []
    );

    if (mapData.length > 0) {
      const message = mapData
        .map(
          (setproduct) =>
            `${setproduct.setproduct_name} <span class="text-red-500">คงเหลือ ${setproduct.setproduct_amount} ชิ้น</span>`
        )
        .join("<br>");
      Swal.fire({
        title: "สินค้าใกล้หมดแล้ว",
        html: message,
        icon: "warning",
      });
    }
  } catch (err) {
    console.log("เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:", err);
  }
};

const handleSetProductCreated = async (response) => {
  // console.log("Response received:", response);
  // Log the response object
  const newSetProduct = response.data;
  if (newSetProduct) {
    setproducts.value.push(newSetProduct);
    addsetproduct.value = false;
    addsearch.value = false;
    OpenSaleCreate.value = true;

    // Fetch updated data
    await getData();
  } else {
    console.warn("Received invalid setproduct data.");
  }
};

const filteredSetProducts = computed(() => {
  let filtered = setproducts.value;

  if (searchSetProduct.value) {
    filtered = filtered.filter((setproduct) =>
      setproduct.setproduct_name
        .toLowerCase()
        .includes(searchSetSetProduct.value.toLowerCase())
    );
  }
  if (categoryValue.value && categoryValue.value !== "ทั้งหมด") {
    filtered = filtered.filter(
      (setproduct) => setproduct.setproduct_category === categoryValue.value
    );
  }
  if (statusValue.value && statusValue.value !== "พร้อมขาย") {
    filtered = filtered.filter(
      (setroduct) => setproduct.setproduct_status === statusValue.value
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

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

const toggleSale = async (setproductId: any, status: number) => {
  const pro_status = status > 0 ? status : 0;
  let newStatus = 0;
  if (pro_status == 0) {
    newStatus = 1;
  } else if (pro_status == 1) {
    newStatus = 0;
  }

  try {
    const resp = await $axios({
      method: "post",
      url: "http://10.5.41.89:8000/api/Setproducts/status",
      headers: {},
      data: {
        setproduct_id: setproductId,
        status_setproduct: newStatus,
      },
    });
    const { data } = resp;
    if (data.status === "200") {
      await getData();
    }
  } catch (err) {
    console.log("เกิดข้อผิดพลาด:", err);
  }
};

const removeSetProduct = async (setproductId) => {
  swalWithBootstrapButtons
    .fire({
      title: "ต้องการลบใช่หรือไม่?",
      text: "ถ้าลบแล้วไม่สามารถย้อนกลับได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่ ลบ!",
      cancelButtonText: "ไม่ ไม่ลบ!",
      reverseButtons: true,
      customClass: {
        confirmButton:
          "mr-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50", // Tailwind CSS classes for confirm button
        cancelButton:
          "ml-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50", // Tailwind CSS classes for cancel button
      },
      buttonsStyling: false,
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await $axios({
            method: "delete",
            url: "http://10.5.41.89:8000/api/setproducts/DeleteSetProduct",
            headers: {},
            data: {
              setproduct_id: setproductId, // This is the body part
            },
          });
          // console.log(resp);
          const { data } = resp;
          if (data.status === "200") {
            await getData();
          }
          // console.log(data);
          swalWithBootstrapButtons.fire({
            title: "ลบแล้ว!",
            text: "สินค้าถูกลบแล้ว",
            icon: "success",
            customClass: {
              popup: "bg-white", // Tailwind CSS classes for success alert background
            },
          });
        } catch (err) {
          console.error("Error removing setproduct:", err);
          swalWithBootstrapButtons.fire({
            title: "ขัดข้อง",
            text: "เกิดข้อผิดพลาดขณะลบสินค้า",
            icon: "error",
            customClass: {
              popup: "bg-red-200", // Tailwind CSS classes for error alert background
            },
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "ยกเลิกแล้ว",
          text: "ยกเลิกการลบสินค้าเรียบร้อย :)",
          icon: "error",
          customClass: {
            popup: "bg-red-200", // Tailwind CSS classes for cancelled alert background
          },
        });
      }
    });
};

onMounted(() => {
  getData();
});
</script>

<style>
.swal2-confirm {
  @apply px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50;
}

.swal2-cancel {
  @apply px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50;
}

/* Custom styles for the SweetAlert2 popup */
.swal2-popup {
  @apply dark:bg-gray-800;
}

/* Custom styles for the SweetAlert2 title */
.swal2-title {
  @apply text-gray-900 dark:text-white;
}

/* Custom styles for the SweetAlert2 text */
.swal2-text {
  @apply text-gray-700 dark:text-gray-400;
}

/* Custom styles for the SweetAlert2 icon */
.swal2-icon {
  @apply text-green-500 dark:text-green-400;
}
.swal2-icon svg {
  @apply w-6 h-6 text-green-500 dark:text-green-400;
}

/* Custom styles for the SweetAlert2 confirm button when focused */
.swal2-confirm:focus {
  @apply ring-2 ring-green-500 ring-opacity-50;
}

/* Custom styles for the SweetAlert2 cancel button when focused */
.swal2-cancel:focus {
  @apply ring-2 ring-red-500 ring-opacity-50;
}

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
