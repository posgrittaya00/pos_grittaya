<template>
  <div
    class="flex flex-col gap-4 w-auto min-w-[200px] max-w-[550px] h-[585px] text-[16px] font-semibold rounded-lg bg-white p-4 relative mr-2 mt-2 shadow-[3px_4px_4px_rgba(0,0,0,0.25)]"
  >
    <div class="card flex justify-center">
      <span
        class="max-w-full w-full text-center py-2 rounded-full border border-black text-[18px]"
        >แก้ไขสินค้า</span
      >
    </div>
    <form @submit.prevent="updateProductId">
      <div class="flex justify-between gap-2 flex-grow">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1 mt-1">
            <label for="Name">ชื่อสินค้า</label>
            <InputText
              id="Name"
              v-model="productData.Name"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="UnitPrice">ราคา</label>
            <InputText
              id="UnitPrice"
              v-model="productData.Price"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Type">หน่วย</label>
            <InputText
              id="Type"
              v-model="productData.Type"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Amount">จำนวน</label>
            <InputText
              id="Amount"
              v-model="productData.Amount"
              class="w-[200px] h-[40px]"
            />
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <label for="Category">หมวดหมู่</label>
            <InputText
              id="Category"
              v-model="productData.Category"
              class="w-[200px] h-[40px]"
            />
          </div>
        </div>
        <div class="container">
          <div
            class="bg-gray-300 w-[250px] h-[400px] rounded-md flex justify-center items-center"
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
      <div class="flex gap-3 mt-9">
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
import { defineComponent, ref, watch } from "vue";
import axios from "axios";
// Use type-only import for PropType
import type { PropType } from "vue";

export default defineComponent({
  name: "FuncEdit",
  props: {
    product: {
      type: Object as PropType<{
        product_id: string;
        product_name: string;
        product_Price: number;
        product_type: string;
        product_amount: number;
        product_category: string;
      }>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const productData = ref({
      Name: props.product.product_name,
      Price: String(props.product.product_Price), // Convert number to string
      Type: props.product.product_type,
      Amount: String(props.product.product_amount), // Convert number to string
      Category: props.product.product_category,
    });

    watch(
      () => props.product,
      (newProduct) => {
        productData.value = {
          Name: newProduct.product_name,
          Price: String(newProduct.product_Price), // Convert number to string
          Type: newProduct.product_type,
          Amount: String(newProduct.product_amount), // Convert number to string
          Category: newProduct.product_category,
        };
      },
      { immediate: true }
    );

    const updateProductId = async () => {
      try {
        const payload = {
          product_id: props.product.product_id,
          product_name: productData.value.Name,
          product_Price: Number(productData.value.Price), // Convert string back to number
          product_type: productData.value.Type,
          product_amount: Number(productData.value.Amount), // Convert string back to number
          product_category: productData.value.Category,
        };
        const response = await axios.post(
          `http://10.5.41.89:8000/api/products/UpdateProduct/${props.product.product_id}`,
          payload
        );
        console.log(response.data);
        emit("product-updated", response.data); // Emit event with the updated product data
      } catch (error) {
        console.error("There was an error updating the product:", error);
      }
    };

    const triggerFileInput = () => {
      (productImageInput.value as HTMLInputElement).click();
    };

    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        console.log("Selected file:", input.files[0]);
      }
    };

    const cancel = () => {
      // Handle the cancel action
      console.log("Cancelled");
    };

    const productImageInput = ref<HTMLInputElement | null>(null);

    return {
      productData,
      updateProductId,
      triggerFileInput,
      handleFileChange,
      cancel,
      productImageInput,
    };
  },
});
</script>
