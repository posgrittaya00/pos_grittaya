<template>
    <!-- กล่องที่ 1 -->
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[70px] text-[16px] font-semibold rounded-t-lg bg-[white] p-4 relative mt-2 mr-2">
            <div class="flex justify-between">
                <Dropdown v-model="selectedCategory" editable :options="category" optionLabel="name" placeholder="หมวดหมู่คลังสินค้า" class="w-[250px] h-[40px] mt-3"/>
                <span class="relative" iconPosition="left">
                    <i class="pi pi-search absolute top-1/2 transform -translate-y-1/2 left-3 text-surface-400 dark:text-surface-600"/>
                    <InputText v-model="value1" placeholder="ค้นหาสินค้า" class="w-[900px] h-[40px] mr-2 mt-3 pl-10 placeholder-shift"/>
                </span>
            </div>
        </div>
    </div>
    <!-- กล่องที่ 2 -->
    <div class="flex">
        <div class="flex flex-col gap-4 w-full h-[500px] text-[16px] font-semibold rounded-b-lg bg-[white] p-4 relative mr-2">
            <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="codeproduct" header="รหัสสินค้า"></Column>
                <Column field="nameproduct" header="ชื่อสินค้า"></Column>
                <Column field="price" header="ราคา(บาท)"></Column>
                <Column field="quantity" header="จำนวน"></Column>
                <Column field="unit" header="หน่วย"></Column>
                <Column field="category" header="หมวดหมู่"></Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup>
const selectedCategory = ref();
const category = ref([
    { name: 'ของใช้ทั่วไป', code: 'IT' }, //อย่าลืมแก้
    { name: 'อาหารแห้ง', code: 'DF' }
]);
</script>

<style lang="scss" scoped>

</style>