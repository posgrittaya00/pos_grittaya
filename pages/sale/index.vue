<template>
    <div>
        <h1>คลังสินค้าที่ขาย</h1>
    </div>
    <div class="flex items-center justify-end mt-8">
    <input v-model="searchQuery" @input="search" type="text" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="ค้นหา">
    </div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border">
        <thead>
          <tr>
            <th class="border p-2 text-left">รหัสสินค้า</th>
            <th class="border p-2 text-left">ชื่อสินค้า</th>
            <th class="border p-2 text-right">จำนวน</th>
            <th class="border p-2 text-right">หน่วย</th>
            <th class="border p-2 text-left">หมวดหมู่</th>
            <th class="border p-2 text-right">ราคา</th>
            <th class="border p-2 text-center">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border p-2">{{ product.code }}</td>
            <td class="border p-2">{{ product.name }}</td>
            <td class="border p-2 text-right">{{ product.quantity }}</td>
            <td class="border p-2 text-right">{{ product.unit }}</td>
            <td class="border p-2 text-left">{{ product.category }}</td>
            <td class="border p-2 text-right">{{ product.price }}</td>
            <td class="border p-2 text-center">
              <span v-if="product.status === 'active'" class="text-green-500">Active</span>
              <span v-else-if="product.status === 'inactive'" class="text-red-500">Inactive</span>
              <span v-else class="text-gray-500">{{ product.status }}</span>
            </td>
            <td class="border p-2 text-center">
              <button class="px-2 py-1 bg-blue-500 text-white rounded-md">
                <span class="fas fa-edit"></span>
                แก้ไข
              </button>
              <button class="px-2 py-1 bg-red-500 text-white rounded-md">
                <span class="fas fa-trash"></span>
                ลบ
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>

</script>

<style>

</style>