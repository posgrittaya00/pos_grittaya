<template>
    <div>
        <h1>Index Page</h1>
    </div>
</template>
  <!-- <div class="login-container"> -->
  <!-- <h1>เข้าสู่ระบบ</h1>
        <div class="input-container">
            <label for ="">username</label>
            <input type="text" name="ชื่อผู้ใช้" v-model="login.username"><br>
        </div>
        <div class="input-container">
            <label for ="">password</label>
            <input type="password" name="รหัสผ่าน" v-model="login.password"><br>
            <p class="forget-container">ลืมรหัสผ่าน</p><br>
        </div>

        {{ login.username }}<br>
        {{ login.password }}<br>

        <div class="input-container">
            <button @click="submitLogin">เข้าสู่ระบบ</button><br>
        </div> -->
  <!-- </div> -->

<script setup lang="ts">
// definePageMeta({
//   layout: 'empty'
// })

// import { ref } from 'vue';
// import { useRouter } from 'vue-router';

// interface Login {
//     username: string;
//     password: string;
// }

// const login = ref<Login>(
//     {
//         username: 'jan',
//         password: '11111'
//     }
// )

// const router = useRouter();

// const submitLogin = () => {
//     // Simulate login logic
//     if (login.value.username === 'jan' && login.value.password === '11111') {
//         alert('Login successful!');
//         router.push('/dashboard');
//     } else {
//         alert('Invalid username or password');
//     }
// }
</script>

<style lang="scss">
// @import url('~/assets/css/main.css');
// .login-container {
//     max-width: 400px;
//     margin: 0 auto;
//     text-align: center;
//     padding: 20px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     background-color: #f9f9f9;
// }

// h1 {
//     font-size: 24px;
//     margin-bottom: 20px;
// }

// .input-container {
//     margin-bottom: 20px;
// }

// label {
//     display: block;
//     margin-bottom: 5px;
// }

// input {
//     width: 100%;
//     padding: 10px;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     box-sizing: border-box;
// }

// .forget-container {
//     margin-top: 20px;
// }

// button {
//     padding: 10px 20px;
//     background-color: #008080;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
// }

// button:hover {
//     background-color: #00ffff;
// }
</style>
