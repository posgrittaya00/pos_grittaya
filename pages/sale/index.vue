<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import salecreate from './partial/salecreate.vue';
const router = useRouter();
const OpenSaleCreate = ref(true)
const addproduct = ref(false)
const addsearch = ref(false)
const goTosalecreate = () => {
  addproduct.value = !addproduct.value;
  addsearch.value = !addsearch.value;
  OpenSaleCreate.value = !OpenSaleCreate.value;
};

const {$axios} = useNuxtApp()

definePageMeta({
  layout: 'default'
})

const selectedStatus = ref();
const status = ref([
    { name: 'พร้อมขาย', code: 'Y' }, //อย่าลืมแก้
    { name: 'ไม่พร้อมขาย', code: 'N' }
]);

const selectedCategory = ref();
const category = ref([
    { name: 'ของใช้ทั่วไป', code: 'IT' }, //อย่าลืมแก้
    { name: 'อาหารแห้ง', code: 'DF' }
]);

const getData = async() => {
  await $axios.get('/api/auth/login').then((resp: any) => {

    const {data} = resp

    const token = useCookie('token')
    token.value = data.token

    // router.push('/')
    // console.log(data);
  }).catch((err: any) => {
    console.log(err);
  })
}

onMounted(() => {
  getData();
})

</script>


<template>
  <div class="flex gap-2 mt-2 mr-2">
    
    <div
      :class="addproduct == true ? 'w-[700px]' : 'w-full'"
      class="flex flex-col gap-4 w-full h-[250px] text-[16px] font-semibold rounded-lg rounded-tr-lg bg-[white] relative ">
      <div class="flex shadow-[0px_4px_4px_rgb(0,0,0,0.25)] py-4 rounded-b-md">
        <div class="px-3">
          <div class="flex justify-between gap-5 items-center">
            <span>
              <Dropdown v-model="selectedStatus" editable :options="status" optionLabel="name" placeholder="สถานะ"
                class="w-full md:w-[8rem] h-[40px]" />
            </span>
            <span>
              <Dropdown v-model="selectedCategory" editable :options="category" optionLabel="name" placeholder="หมวดหมู่"
                class="w-full md:w-[9rem] h-[40px]" />
            </span>
            <span class="relative">
              <InputText v-model="value1" placeholder="ค้นหาสินค้า"
                class="w-[700px] h-[40px] mr-2 pl-10 placeholder-shift" 
                :class="addsearch == false ? 'w-[230px]' : 'w-full'"
                :pt="{
                  root: ({ props, context, parent }) => {
                    var _a;
                    return {
                      class: [
                        // Font
                        'leading-[normal]',
                        // Flex
                        { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
                        // Spacing
                        'm-0',
                        {
                          'px-4 py-4': props.size == 'large',
                          'px-2 py-2': props.size == 'small',
                          'p-3': props.size == null
                        },
                        // Shape
                        { 'rounded-md': parent.instance.$name !== 'InputGroup' },
                        { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
                        { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
                        { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },
                        // Colors
                        'text-surface-800 dark:text-white/80',
                        'placeholder:text-white dark:placeholder:text-white',
                        'bg-surface-0 dark:bg-surface-900',
                        'border',
                        { 'border-surface-300 dark:border-surface-600': !props.invalid },
                        // Invalid State
                        'invalid:focus:ring-red-200',
                        'invalid:hover:border-red-500',
                        { 'border-red-500 dark:border-red-400': props.invalid },
                        // States
                        {
                          'hover:border-primary': !context.disabled && !props.invalid,
                          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10': !context.disabled,
                          'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                        },
                        // Filled State *for FloatLabel
                        { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && context.filled },
                        // Misc
                        'appearance-none',
                        'transition-colors duration-200'
                      ]
                    };
                  }
                }" />
              <i
                class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 -mt-1 text-surface-400 dark:text-surface-600" />
            </span>
            <span class="buttoncreate">
              <Button icon="pi pi-plus" class="w-[100px] h-[40px] text-lg bg-[#326035] mr-2" @click="goTosalecreate" />
            </span>
          </div>
        </div>
      </div>
        <div class="flex flex-col gap-2 w-full h-[500px] text-[16px] font-semibold rounded-b-lg bg-[white] p-3 relative mr-2">
          <DataTable :value="products" tableStyle="min-width: 40rem">
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
    <div 
    v-if="addproduct"
    :class="[
      'ease-in-out',
      'duration-200',
      { 'w-0 h-0 translate-x-[999px]': OpenSaleCreate },
    ]">
      <salecreate :open="OpenSaleCreate" /> 
    </div>
  </div>
</template>


<style>
.placeholder-shift::placeholder {
  color: #999;
  /* ตัวอย่างสีของ placeholder */
  font-size: 14px;
  /* ตัวอย่างขนาดของ placeholder */
  transform: translateY(-2px);
  /* ขยับ placeholder ลงหรือขึ้นตามต้องการ */
}

.relative .pi-search {
  transform: translateY(-50%);
}

.relative .pi-search {
  top: 60%;
  /* ปรับค่าตรงนี้เพื่อขยับไอคอนขึ้นหรือลง */
  left: 10px;
  /* ปรับค่าตรงนี้เพื่อขยับไอคอนไปทางซ้ายหรือขวา */
  transform: translateY(-50%);
  color: #999;
  /* ตัวอย่างสีของไอคอน */
}
</style>