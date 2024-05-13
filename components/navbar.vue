<template>
  <div>
    <header
      class="lg:flex flex justify-between bg-[#FFFFFF] h-[100px] items-center drop-shadow-md"
    >
      <nav class="navbar-logo">
        <img src="/img/grit.png" class="h-[75.63px]" alt="" />
      </nav>
      <nav class="box-border h-[100px] w-[335px] flex items-center space-x-8">
        <i class="pi pi-bell" style="font-size: 2rem"></i>
        <img src="/img/profile.png" class="h-[63px] w-[63px]" alt="" />
        <li class="flex flex-col">
          <strong class="mb-2">Peter boom</strong>
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

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
  {
    label: "File",
    icon: "pi pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        items: [
          {
            label: "Document",
            icon: "pi pi-file",
          },
          {
            label: "Image",
            icon: "pi pi-image",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Open",
        icon: "pi pi-folder-open",
      },
      {
        label: "Print",
        icon: "pi pi-print",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-file-edit",
    items: [
      {
        label: "Copy",
        icon: "pi pi-copy",
      },
      {
        label: "Delete",
        icon: "pi pi-times",
      },
    ],
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Share",
    icon: "pi pi-share-alt",
    items: [
      {
        label: "Slack",
        icon: "pi pi-slack",
      },
      {
        label: "Whatsapp",
        icon: "pi pi-whatsapp",
      },
    ],
  },
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style lang="scss"></style>
