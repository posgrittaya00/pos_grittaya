<template>
    <div class="flex">
        <div class="pi pi-shopping-bag text-[16px] font-semibold mr-2 mt-2 rounded-t-lg bg-white p-4 ">ออเดอร์ทั้งหมด</div>
        <span class="relative">
            <InputText placeholder="ค้นหาออเดอร์" class="w-[300px] h-[40px] mr-2 mt-3 pl-10 placeholder-shift" />
            <i class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 text-surface-400 dark:text-surface-600"/>
        </span>
        <span class="buttoncreate">
            <Button label="สร้างออเดอร์" icon="pi pi-plus-circle" class="w-[200px] h-[40px] text-lg bg-[#326035] mr-4 mt-3"  @click="goToCreateOrder"/>
        </span>
    </div>
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[300px] text-[16px] font-semibold rounded-b-lg rounded-tr-lg bg-[white] p-4 relative mr-2">
            <div class="flex justify-between">
                <span class="block mb-3">ออเดอร์</span>
                <input type="datetime-local" id="meeting-time"
                    name="meeting-time" :value="dateToday(date)"
                    class="rounded-lg border border-gray-300 shadow-sm h-[40px]">
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
                </span>
            </div>
        <div class="flex flex-col gap-4 w-full h-[500px] text-[16px] font-semibold rounded-b-lg bg-[white] p-2 relative">
            <DataTable  >
                <Column field="number" header="รหัสออเดอร์"></Column>
                <Column field="codeproduct" header="วันที่สั่งซื้อ"></Column>
                <Column field="nameproduct" header="สถานะออเดอร์"></Column>
                <Column field="quantity" header="ชื่อลูกค้า"></Column>
                <Column field="unit" header="ช่องทางการสั่งซื้อ"></Column>
                <Column field="price" header="รูปแบบการจัดส่ง"></Column>
                <Column field="price" header="ยอดขาย"></Column>
                <Column field="discount" header="หมายเหตุ"></Column>
            </DataTable>
        </div>  
        </div>
    </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const date = ref<any>(null)
const searchDelayTimer = ref<any>(null)



const goToCreateOrder = () => {
    router.push('/create/createorder');
};

const dateToday = (date: any) => {
    date = new Date()
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
     const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

onMounted(() => {
  clearInterval(searchDelayTimer.value)
  searchDelayTimer.value = setInterval(() => {
    date.value =
      new Date().toLocaleDateString('en-GB') +
      ' - ' +
      new Date().toLocaleTimeString('en-GB')
  }, 100)
})

definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss" scoped>

</style>
