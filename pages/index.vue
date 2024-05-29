<template>
  <div
    class="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-white w-[500px] rounded-md mt-2 mx-auto"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-[200px] w-auto"
        src="public/img/grit3.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        เข้าสู่ระบบ
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submitLogin">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >ชื่อผู้ใช้</label
          >
          <div class="mt-2">
            <input
              id="username"
              name="username"
              v-model="username"
              type="text"
              autocomplete="username"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >รหัสผ่าน</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="text-sm">
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >ลืมรหัสผ่าน?</a
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const username = ref("");
const password = ref("");
const router = useRouter();

const submitLogin = async () => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      username: username.value,
      password: password.value,
    });

    if (response.status === 200) {
      alert("Login successful!");
      router.push("/dashboard");
    }
  } catch (error) {
    alert("Invalid username or password");
  }
};

definePageMeta({
  layout: "auth",
});
</script>

<style></style>
