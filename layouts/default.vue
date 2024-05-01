<template>
    <div>
        <header>
            <nav class="navbar-left">
                <h1 class="logo">Grittaya Shop</h1>
                <NuxtLink to="/dashboard">แดชบอร์ด</NuxtLink>
                <NuxtLink to="/sale">คลังสินค้าที่ขาย</NuxtLink>
                <NuxtLink to="/stock">คลังสินค้าที่สต็อก</NuxtLink>
                <NuxtLink to="/edit">แก้ไขสต็อก</NuxtLink>
                <NuxtLink to="/create">สร้างออเดอร์</NuxtLink>
            </nav>
            <navbar class="navbar-header">
                <NuxtLink to="/create">สร้างออเดอร์</NuxtLink>
            </navbar>
        </header>
        <div class="contect-container">
            <slot />
        </div>
        <body>

        </body>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar-left {
    width: 200px; /* Adjust the width as needed */
    background-color: white;
    padding: 20px;
}

.logo {
    color: black;
    font-size: 24px;
    margin-bottom: 20px;
}

.navbar-left a {
    display: block;
    color: black;
    text-decoration: none;
    margin-bottom: 10px;
}

.navbar-left a:hover {
    text-decoration: underline;
}
body {
    background-color: #E2E2E2;
}
.contect-container {
    display: flex;
    justify-content: center;
    align-items: auto;
    height: 100vh;
}
.navbar-header {
    width: 200px; /* Adjust the width as needed */
    background-color: white;
    padding: 20px;
}
</style>