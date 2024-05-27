<template>
  <div
    class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[550px] h-[700px] text-[16px] font-semibold rounded-lg bg-white p-4 relative mr-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]">
    <div class="card flex justify-center">
      <span class="max-w-full w-full text-center py-2 rounded-full border border-black text-[18px]">เพิ่มสินค้า</span>
    </div>
    <div class="flex justify-between gap-2 flex-grow">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1 mt-1">
          <label for="ID">รหัสสินค้า</label>
          <InputText id="ID" v-model="ID" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="Name">ชื่อสินค้า</label>
          <InputText id="Name" v-model="Name" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="UnitPrice">ราคา</label>
          <InputText id="UnitPrice" v-model="UnitPrice" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="Type">หน่วย</label>
          <InputText id="Type" v-model="Type" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="Amount">จำนวน</label>
          <InputText id="Amount" v-model="Amount" class="w-[200px] h-[40px]" />
        </div>
        <div class="flex flex-col gap-1 mt-1">
          <label for="Category">หมวดหมู่</label>
          <InputText id="Category" v-model="Category" class="w-[200px] h-[40px]" />
        </div>
      </div>
      <div class="container">
        <div class="bg-gray-300 w-[250px] h-[475px] rounded-md flex justify-center items-center">
          <button class="flex items-center" onclick="document.getElementById('productImageInput').click()">
          <span class="pi pi-plus-circle" style="font-size: 2rem;"></span>
          <div>เพิ่มรูปภาพสินค้า</div>
          </button>
          <input type="file" id="productImageInput" ref="productImageInput" style="display: none;" @change="handleFileChange" accept="image/*">
        </div>
      </div>
    </div>
    <div class="flex gap-3 mt-1">
      <Button label="ยกเลิก" severity="danger" class="flex-grow w-[80px]" @click="_" />
      <Button label="บันทึก" class="flex-grow w-[80px]"  @click="create_product" />
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
import { useRouter } from 'vue-router';
import cookies from 'js-cookie';
import Multiselect from 'vue-multiselect'
// export default {
//   components: {
//     Multiselect
//   },
//   layout: 'default',
//   data () {
//     return {
//       ID: '',
//       Name: '',
//       UnitPrice: '',
//       Type: '',
//       Amount: '',
//       Category: '',
//       file: null,
//     }
//   },
//   method: {
//     async create_product () {
//         const ID = productNames.join(', ')
  
//         const config = {
//           headers: { Authorization: `Bearer ${cookies.get('token')}` }
//         }
  
//         const formData = new FormData()
//         if (this.file === null) {
//           formData.append('ID', ID)
//           formData.append('Name', this.Name)
//           formData.append('UnitPrice', this.UnitPrice)
//           formData.append('Type', this.Type)
//           formData.append('Amount', this.Amount)
//           formData.append('Category', this.Category)
//           formData.append('attach_file', '')
//           await this.$axios
//             .post('http://localhost:8000/api/products/CreateProduct', formData, config)
//             .then((response) => {
//               if (response.status === 201) {
//                 Swal.fire({
//                   icon: 'success',
//                   title: 'Success',
//                   text: 'Product created successfully',
//                   confirmButtonText: 'Ok'
//                 })
//                 this.$router.push('/products')
//               }
//             })
//             .catch((error) => {
//               if (error.response.status === 400) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Please correct your information'
//                 })
//               } else if (error.response.status === 403) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Forbidden'
//                 })
//                 this.$router.push('/')
//                 cookies.remove('token')
//               } else if (error.response.status === 401) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Unauthorized'
//                 })
//                 this.$router.push('/')
//                 cookies.remove('token')
//               }
//             })
//         } else {
//           formData.append('ID', ID)
//           formData.append('Name', this.Name)
//           formData.append('UnitPrice', this.UnitPrice)
//           formData.append('Type', this.Type)
//           formData.append('Amount', this.Amount)
//           formData.append('Category', this.Category)
//           formData.append('attach_file', '')
//           await this.$axios
//             .post('http://localhost:8000/api/products/CreateProduct', formData, config)
//             .then((response) => {
//               if (response.status === 201) {
//                 Swal.fire({
//                   icon: 'success',
//                   title: 'Success',
//                   text: 'Ticket created successfully',
//                   confirmButtonText: 'Ok'
//                 })
//                 this.$router.push('/tickets')
//               }
//             })
//             .catch((error) => {
//               if (error.response.status === 400) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Please correct your information'
//                 })
//               } else if (error.response.status === 403) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Forbidden'
//                 })
//                 this.$router.push('/')
//                 cookies.remove('token')
//               } else if (error.response.status === 401) {
//                 Swal.fire({
//                   icon: 'error',
//                   title: 'Oops...',
//                   text: 'Unauthorized'
//                 })
//                 this.$router.push('/')
//                 cookies.remove('token')
//               }
//             })
//         }
//       }
//     }
//   }  
export default {
  data () {
    return {
      ID: '',
      Name: '',
      UnitPrice: '',
      Type: '',
      Amount: '',
      Category: ''
    }
  },
  methods: {
    async create_product () {
      await this.$axios
        .post('http://localhost:8000//api/products/CreateProduct', {
          ID: this.ID,
          Name: this.Name,
          UnitPrice: this.UnitPrice,
          Type: this.Type,
          Amount: this.Amount,
          Category: this.Category,
        })
        .then(function (response) {
          if (response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'You have successfully registered',
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
          } else if (error.response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'Create completed',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
  }
}
</script>
