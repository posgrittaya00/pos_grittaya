<template>
    <!-- กล่องที่ 1 -->
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[350px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative mt-2 mr-2">
            <div class="flex justify-between">
                <span class="text-[18px]">ข้อมูลลูกค้า</span>
                <span>จำหน่ายโดย : Peter boom</span>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-2">
                    <label for="username">ชื่อลูกค้า</label>
                    <InputText id="username" v-model="value" class="w-[500px] h-[40px]"/>
                    <label for="address">ที่อยู่</label>
                    <InputText id="address" v-model="value" class="w-[500px] h-[40px]"/>
                    <label for="zipcode">รหัสไปรษณีย์</label>
                    <InputText id="zipcode" v-model="value" class="w-[500px] h-[40px]"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="phone">เบอร์โทรศัพท์</label>
                    <InputText id="phone" v-model="value" class="w-[500px] h-[40px]"/>
                    <label for="distribution">ช่องทางการจำหน่าย</label>
                    <Dropdown v-model="selectedDistribution" editable :options="distribution" optionLabel="name" class="w-[500px] h-[40px]"/>
                    <label for="category">หมวดหมู่ลูกค้า</label>
                    <Dropdown v-model="selectedCategory" editable :options="category" optionLabel="name" class="w-[500px] h-[40px]"/>
                </div>
            </div>
        </div>
    </div>
    <!-- กล่องที่ 2 -->
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[700px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative mt-2 mr-2">
            <div class="flex justify-between">
                <span class="text-[18px]">สินค้า</span>
            </div>
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="number" header="ลำดับ"></Column>
                <Column field="codeproduct" header="รหัสสินค้า"></Column>
                <Column field="nameproduct" header="ชื่อสินค้า"></Column>
                <Column field="quantity" header="จำนวน"></Column>
                <Column field="unit" header="หน่วย"></Column>
                <Column field="price" header="ราคา(บาท)"></Column>
                <Column field="discount" header="ส่วนลด"></Column>
            </DataTable>
            <span class="buttoncreate">
                <Button label="เพิ่มแถวรายการ" icon="pi pi-plus-circle" class="w-[200px] h-[40px] text-lg bg-[#326035] mr-2 mt-3"  @click="goToCreateOrder"/>
            </span>
            <div class="border-t border-black mt-4"></div>
            <div class="text-[18px]">การชำระเงิน</div>
            <label for="payment">วิธีการชำระเงิน</label>
            <Dropdown v-model="selectedPayment" editable :options="payment" optionLabel="name" class="w-[500px] h-[40px]"/>
            <div class="border-t border-black mt-4"></div>
            <div class="text-[18px]">การจัดส่ง</div>
            <label for="delivery">ช่องทางการจัดส่ง</label>
            <Dropdown v-model="selectedDelivery" editable :options="delivery" optionLabel="name" class="w-[500px] h-[40px]"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedDistribution = ref();
const distribution = ref([
    { name: 'New York', code: 'NY' }, //อย่าลืมแก้
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const selectedCategory = ref();
const category = ref([
    { name: 'New York', code: 'NY' }, //อย่าลืมแก้
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const selectedPayment = ref();
const payment = ref([
    { name: 'New York', code: 'NY' }, //อย่าลืมแก้
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const selectedDelivery = ref();
const delivery = ref([
    { name: 'New York', code: 'NY' }, //อย่าลืมแก้
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss" scoped>

</style>