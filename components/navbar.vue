<template>
  <div>
    <header
      class="lg:flex flex justify-between bg-[#ffffff] backdrop-blur-sm h-[100px] items-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
    >
      <nav class="navbar-logo">
        <img src="/img/grit.png" class="h-[75.63px]" alt="" />
      </nav>
      <nav class="box-border h-[100px] w-[335px] flex items-center space-x-8">
        <i class="pi pi-bell" style="font-size: 2rem"></i>
        <img src="/img/profile.png" class="h-[63px] w-[63px]" alt="" />
        <li class="flex flex-col">
          <strong class="mb-2">{{ store.$state.username }}</strong>
          <span>แอดมิน</span>
        </li>
        <div
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_tmenu"
          class="ease cursor-pointer duration-100 card flex justify-center items-center w-8 h-8 rounded hover:bg-[#000000] hover:bg-opacity-20"
        >
          <i class="pi pi-sort-down-fill cursor-pointer"></i>
          <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp, useCookie } from "#imports";
import { useIndexStore } from "~/store/main";
import type { MenuItem } from 'primevue/menuitem';


const menu = ref();
const router = useRouter();
const { $axios } = useNuxtApp();
const token = useCookie("token");
const store = useIndexStore();

const logout = async () => {
  try {
    // Optional: Inform the server to invalidate the token
    await $axios.post("/api/auth/logout");

    // Remove token from cookies
    const token = useCookie("token");
    token.value = null;
    // token.remove();

    alert("ออกจากระบบสำเร็จ!");
    router.push("/");
  } catch (error) {
    {
      {
        error;
      }
    }
    console.error("Error during logout", error);
    alert("มีข้อผิดพลาดเกิดขึ้นในระหว่างการออกจากระบบ");
  }
};

const items = ref<MenuItem[]>([
  {
    label: "ชื่อผู้ใช้",
    icon: "pi pi-file",
  },
  {
    label: "ชื่อเล่น",
    icon: "pi pi-file-edit",
  },
  {
    label: "ตำแหน่ง",
    icon: "pi pi-file",
  },
  {
    label: "รหัสผู้ใช้",
    icon: "pi pi-file-edit",
  },
  {
    separator: true,
  },
  {
    label: "ออกจากระบบ",
    icon: "pi pi-sign-out",
    command: logout,
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style lang="scss"></style>
