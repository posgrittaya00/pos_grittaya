<template>
  <div
    class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[550px] h-[700px] text-[16px] font-semibold rounded-lg bg-white p-4 relative mr-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]">
    <div class="card flex justify-center">
      <span class="max-w-full w-full text-center py-2 rounded-full border border-black text-[18px]">เพิ่มสินค้า</span>
    </div>
    <div class="flex justify-between gap-2 flex-grow">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1 mt-1">
          <label for="product-code">รหัสสินค้า</label>
          <InputText id="product-code" v-model="productCode" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="product-name">ชื่อสินค้า</label>
          <InputText id="product-name" v-model="productName" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="price">ราคา</label>
          <InputText id="price" v-model="price" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="unit">หน่วย</label>
          <InputText id="unit" v-model="unit" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="quantity">จำนวน</label>
          <InputText id="quantity" v-model="quantity" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="category">หมวดหมู่</label>
          <InputText id="category" v-model="category" class="w-[200px] h-[40px]" />
        </div>
      </div>
      <div class="container">
        <div class="bg-gray-300 w-[250px] h-full rounded-md flex justify-center items-center">
          <span class="pi pi-plus-circle" style="font-size: 2rem;"></span>
          <div>เพิ่มรูปภาพสินค้า</div>
        </div>
      </div>
    </div>
    <div class="flex gap-3 mt-1">
      <Button label="ยกเลิก" severity="danger" class="flex-grow w-[80px]" @click="_" />
      <Button label="บันทึก" class="flex-grow w-[80px]"  @click="_" />
    </div>
  </div>
</template>


<script>
import { ref, defineProps } from 'vue';
defineProps({
  open: Boolean,
})
const text = ref('เพิ่มรายการสินค้า');
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      productCode: '',
      productName: '',
      price: '',
      unit: '',
      quantity: '',
      category: '',
      
    }
  },
  methods: {
    async createProduct () {
      await this.$axios
        .post('http://localhost:8000/api/auth/register', {
          productCode: this.productCode,
          productName: this.productName,
          price: this.price,
          unit: this.unit,
          quantity: this.quantity,
          category: this.category,

        })
        .then(function (response) {
          if (response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You have successfully added product ',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.value) {
                window.location.href = 'http://localhost:3000/sale'
              }
            })
          }
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please correct your information'
            })
          }
        })
    }
  }
}
</script>
