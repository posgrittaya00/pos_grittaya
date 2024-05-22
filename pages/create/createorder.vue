<template>
    <div class="flex flex-col gap-2 min-h-screen py-5">
        <div class="w-10/12 flex flex-col gap-2">
            <!-- กล่องที่ 1 -->
            <div class="flex flex-col bg-white w-[1200px] rounded-lg p-4">
                <div class="flex justify-between mb-5">
                    <span class="text-[18px] font-bold">ข้อมูลลูกค้า</span>
                    <span>จำหน่ายโดย : Peter boom</span>
                </div>
                <div class="flex justify-between text-[16px] font-semibold rounded-lg bg-white">
                    <div class="flex gap-2 w-full">
                        <div class="flex flex-col gap-2">
                            <label for="username">ชื่อลูกค้า</label>
                            <InputText id="username" v-model="username" class="w-[500px] h-[40px]" />
                            <label for="address">ที่อยู่</label>
                            <div class="card flex justify-content-center">
                                <Textarea v-model="address" rows="5" cols="30" class="w-[500px]"/>
                            </div>
                            <label for="zipcode">รหัสไปรษณีย์</label>
                            <InputText id="zipcode" v-model="zipcode" class="w-[500px] h-[40px]" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="phone">เบอร์โทรศัพท์</label>
                            <InputText id="phone" v-model="phone" class="w-[500px] h-[40px]" />
                            <label for="order">ช่องทางการสั่งซื้อ</label>
                            <Dropdown v-model="selectedOrder" editable :options="order" optionLabel="name" class="w-[500px] h-[40px]" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- กล่องที่ 2 -->
            <div class="flex flex-col bg-white w-[1200px] rounded-lg p-4 mt-2">
                <!-- แถวที่ 1 -->
                <div class="text-[18px] font-semibold mb-5">สินค้า</div>
                <DataTable :value="products" tableStyle="min-width: 50rem">
                    <Column field="number" header="ลำดับ"></Column>
                    <Column field="codeproduct" header="รหัสสินค้า"></Column>
                    <Column field="nameproduct" header="ชื่อสินค้า"></Column>
                    <Column field="quantity" header="จำนวน"></Column>
                    <Column field="unit" header="หน่วย"></Column>
                    <Column field="price" header="ราคา(บาท)"></Column>
                    <Column field="discount" header="ส่วนลด"></Column>
                </DataTable>
                <Button label="เพิ่มแถวรายการ" icon="pi pi-plus-circle" class="w-[200px] h-[40px] text-lg bg-[#326035] mt-3" @click="goToCreateOrder" />
                <div class="border-t border-black mt-4"></div>
                <!-- แถวที่ 2 -->
                <div class="mt-2">
                    <div class="text-[18px] font-semibold mb-5">การจัดส่ง</div>
                    <div class="flex flex-col gap-2">
                        <label for="delivery">ช่องทางการจัดส่ง</label>
                        <Dropdown v-model="selectedDelivery" editable :options="delivery" optionLabel="name" class="w-[500px] h-[40px]" />
                        <label for="note">หมายเหตุ</label>
                        <InputText id="note" v-model="note" class="w-[500px] h-[40px]" />
                    </div>
                    <div class="border-t border-black mt-4"></div>
                </div>
                <!-- แถวที่ 3 -->
                <div class="flex justify-between mt-2">
                    <div>
                        <div class="text-[18px] font-semibold mb-5">การชำระเงิน</div>
                            <div class="flex flex-col gap-2">
                                <label for="payment">วิธีการชำระเงิน</label>
                                <Dropdown v-model="selectedPayment" editable :options="payment" optionLabel="name" class="w-[500px] h-[40px] mb-2" />
                                <div class="text-[18px] font-semibold mb-5">ผ่อนชำระ</div>
                                    <label for="howtopay">วิธีการผ่อนชำระ</label>
                                    <InputText id="howtopay" v-model="howtopay" class="w-[500px] h-[40px]" />
                                    <label for="installmentform">รูปแบบการผ่อนชำระ</label>
                                    <Dropdown v-model="selectedForm" editable :options="form" optionLabel="name" class="w-[500px] h-[40px]" />
                                </div>
                    </div>
                    <div class="flex flex-col gap-1 mt-4">
                        <Card style="width: 25rem; overflow: hidden">
                            <template #subtitle>ชำระครั้งที่</template>
                            <template #content>
                                <InputText id="money" v-model="money" class="w-[350px] h-[40px]" />
                                <label for="remaining">คงเหลือจากยอดรวม</label>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 mt-1">
                                    <Button label="บันทึก" class="w-full" />
                                </div>
                            </template>
                        </Card>
                        <label for="allOrders">รวมการสั่งซื้อ</label>
                        <label for="cost">ค่าส่ง</label>
                        <label for="summarize">สรุปการชำระเงิน</label>
                        <label for="elite">ยอดค้างชำระทั้งหมด</label>
                        <div class="flex gap-3 mt-1">
                            <Button label="ยกเลิก" severity="secondary" outlined class="w-full" @click="goToBack" />
                            <Button label="สร้างออเดอร์" class="w-full" @click="goToCreateFinish" />
                        </div>
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
    { name: 'Facebook', code: 'FB' },
    { name: 'Tiktok', code: 'TT' },
    { name: 'Grab', code: 'G' },
]);

const selectedDelivery = ref();
const delivery = ref([
    { name: 'ไปรษณีย์ไทย', code: 'THAI' },
    { name: 'J&T', code: 'JT' },
    { name: 'Flash Express', code: 'FE' }
]);

const selectedPayment = ref();
const payment = ref([
    { name: 'โอนจ่าย', code: 'TRAN' },
    { name: 'เงินสด', code: 'CASH' }
]);

const selectedForm = ref();
const form = ref([
    { name: 'โอนจ่าย', code: 'TRAN' },
    { name: 'เงินสด', code: 'CASH' }
]);

const products = ref([]);

definePageMeta({
    layout: 'default'
});
</script>

<style lang="scss" scoped></style>
