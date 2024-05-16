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
                    <label for="order">ช่องทางการสั่งซื้อ</label>
                    <Dropdown v-model="selectedOrder" editable :options="order" optionLabel="name" class="w-[500px] h-[40px]"/>
                </div>
            </div>
        </div>
    </div>
    <!-- กล่องที่ 2 -->
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[1000px] text-[16px] font-semibold rounded-lg bg-[white] p-4 relative mt-2 mr-2">
            <!-- box 1 -->
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
            <div class="border-t border-black mt-4 flex flex-col gap-2"></div>
            <!-- box 2 -->
            <div class="flex justify-between">
                <span class="text-[18px]">การจัดส่ง</span>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-2">
                    <label for="delivery">ช่องทางการจัดส่ง</label>
                    <Dropdown v-model="selectedDelivery" editable :options="delivery" optionLabel="name" class="w-[500px] h-[40px]"/>
                    <label for="note">หมายเหตุ</label>
                    <InputText id="note" v-model="value" class="w-[500px] h-[40px]"/>
                </div>
            </div>
            <div class="border-t border-black mt-4"></div>
            <!-- box 3 -->
            <div class="flex justify-between">
                <span class="text-[18px]">การชำระเงิน</span>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-2">
                    <label for="payment">วิธีการชำระเงิน</label>
                    <Dropdown v-model="selectedPayment" editable :options="payment" optionLabel="name" class="w-[500px] h-[40px]"/>
                <div class="flex justify-between">
                    <span class="text-[18px]">ผ่อนชำระ</span>
                </div>
                    <label for="howtopay">วิธีการผ่อนชำระ</label>
                    <InputText id="howtopay" v-model="value" class="w-[500px] h-[40px]"/>
                    <label for="installmentform">รูปแบบการผ่อนชำระ</label>
                    <Dropdown v-model="selectedForm" editable :options="form" optionLabel="name" class="w-[500px] h-[40px]"/>
                </div>
                <div>
                    <Card style="width: 25rem; overflow: hidden">
                        <template #subtitle>ชำระครั้งที่ </template>
                        <template #content>
                            <InputText id="money" v-model="value" class="w-[350px] h-[40px]"/>
                            <label for="remaining">คงเหลือ </label> <label for="remaining">จากยอดรวม </label>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <Button label="บันทึก" class="w-full" />
                            </div>
                        </template>
                    </Card> 
                    <label for="howtopay">รวมการสั่งซื้อ </label><br>
                    <label for="howtopay">ค่าส่ง </label><br>
                    <label for="howtopay">สรุปการชำระเงิน </label><br>
                    <label for="howtopay">ยอดค้างชำระทั้งหมด </label>
                    <div class="flex gap-3 mt-1">
                        <Button label="ยกเลิก" severity="secondary" outlined class="w-full bg-[#FF0033] text-[#FFFFFF]" @click="goToBack"/>
                        <Button label="สร้างออเดอร์" class="w-full" @click="goToCreateFinish"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToBack = () => {
    router.push('/create');
};

const goToCreateFinish = () => {
    router.push('/create');
};

const selectedOrder = ref();
const order = ref([
    { name: 'Facebook', code: 'FB' }, //อย่าลืมแก้
    { name: 'Tiktok', code: 'TT' },
    { name: 'Grab', code: 'G' },
]);

const selectedDelivery = ref();
const delivery = ref([
    { name: 'ไปรษณีย์ไทย', code: 'THAI' }, //อย่าลืมแก้
    { name: 'J&T', code: 'JT' },
    { name: 'Flash Exprees', code: 'FE' }
]);

const selectedPayment = ref();
const payment = ref([
    { name: 'โอนจ่าย', code: 'TRAN' }, //อย่าลืมแก้
    { name: 'เงินสด', code: 'CASH' }
]);

const selectedForm = ref();
const form = ref([
    { name: 'โอนจ่าย', code: 'TRAN' }, //อย่าลืมแก้
    { name: 'เงินสด', code: 'CASH' }
]);

definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss" scoped>

</style>