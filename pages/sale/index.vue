<template>
  <div>
    <h1>คลังสินค้าที่ขาย (Inventory)</h1>
    <div >
      <div class="w-full bg-white p-4 rounded-lg shadow-lg text-black">  
      <h2 class="text-lg font-semibold mb-2">คลังสินค้าที่ขาย</h2>
      <div class="flex items-center justify-end mt-8">
        <input v-model="searchQuery" @input="search" type="text" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="ค้นหา (Search)">
      </div>
      <table class="w-full border-collapse border">
        <thead>
          <tr>
            <th class="border p-2 text-left">รหัสสินค้า</th>
            <th class="border p-2 text-left">ชื่อสินค้า</th>
            <th class="border p-2 text-right">จำนวน</th>
            <th class="border p-2 text-right">หน่วย </th>
            <th class="border p-2 text-left">หมวดหมู่ </th>
            <th class="border p-2 text-right">ราคา </th>
            <th class="border p-2 text-center">สถานะ </th>
            <th class="border p-2"></th>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    
</template>

<script setup>
// Replace this with your actual product data
const products = [
  { id: 1, code: 'P0001', name: 'Apple', quantity: 10, unit: 'kg', category: 'Fruits', price: 1.00, status: 'active' },
  // Add more product objects here
];

function search() {
  // Implement your search logic here
  // This example simply logs the search query for now
  console.log('Search query:', searchQuery);
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.mt-8 {
  margin-top: 8px;
}
</style>
