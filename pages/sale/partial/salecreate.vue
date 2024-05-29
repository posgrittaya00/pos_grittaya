<template>
  <div
    class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[550px] h-[700px] text-[16px] font-semibold rounded-lg bg-white p-4 relative mr-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]"
  >
    <div class="card flex justify-center">
      <span
        class="max-w-full w-full text-center py-2 rounded-full border border-black text-[18px]"
        >เพิ่มสินค้า</span
      >
    </div>
    <form @submit.prevent="create_product">
      <div class="flex justify-between gap-2 flex-grow">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1 mt-1">
            <label for="ID">รหัสสินค้า</label>
            {{ Name }}
            <InputText
              type="text"
              id="ID"
              v-model="ID"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Name">ชื่อสินค้า</label>
            <InputText id="Name" v-model="Name" class="w-[200px] h-[40px]" />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="UnitPrice">ราคา</label>
            <InputText
              id="UnitPrice"
              v-model="Price"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Type">หน่วย</label>
            <InputText id="Type" v-model="Type" class="w-[200px] h-[40px]" />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Amount">จำนวน</label>
            <InputText
              id="Amount"
              v-model="Amount"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Category">หมวดหมู่</label>
            <InputText
              id="Category"
              v-model="Category"
              class="w-[200px] h-[40px]"
            />
          </div>
        </div>
        <div class="container">
          <div
            class="bg-gray-300 w-[250px] h-[475px] rounded-md flex justify-center items-center"
          >
            <button
              class="flex items-center"
              type="button"
              @click="triggerFileInput"
            >
              <span class="pi pi-plus-circle" style="font-size: 2rem"></span>
              <div>เพิ่มรูปภาพสินค้า</div>
            </button>
            <input
              type="file"
              id="productImageInput"
              ref="productImageInput"
              style="display: none"
              @change="handleFileChange"
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div class="flex gap-3 mt-1">
        <Button
          type="button"
          label="ยกเลิก"
          severity="danger"
          class="flex-grow w-[80px]"
          @click="cancel"
        />
        <Button type="submit" label="บันทึก" class="flex-grow w-[80px]" />
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";


export default defineComponent({
  components: {
  },
  data() {
    return {
      ID: ref(""),
      Name: ref(""),
      Price: ref(),
      Type: ref(""),
      Amount: ref(),
      Category: ref(""),
    };
  },
  methods: {
    async create_product() {
      try {
        const payload = {
          product_name: this.Name,
          product_Price: Number(this.Price),
          product_type: this.Type,
          product_amount: Number(this.Amount),
          product_category: this.Category,
        };
        const response = await axios.post(
          "http://10.5.41.86:8000/api/products/CreateProduct",
          payload
        );
        console.log(response.data);
      } catch (error) {
        console.error("There was an error creating the product:", error);
      }
    },
    triggerFileInput() {
      (this.$refs.productImageInput as HTMLInputElement).click();
    },
    handleFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        console.log("Selected file:", input.files[0]);
      }
    },
    cancel() {
      // Handle the cancel action
      console.log("Cancelled");
    },
  },
});
</script>