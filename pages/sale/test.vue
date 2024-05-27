<template>
    <div>
        <form @submit.prevent="login()">
            <input type="email" name="email" id="" v-model="user">
            <input type="pass" name="pass" id="" v-model="pass.pass">
            <button type="submit" class=" bg-red-500">good</button>
        </form>
    </div>
</template>

<script setup lang="ts">
interface User {
    user:string
    pass:string

}
    const user = ref<string>('')
    const pass = reactive({
        pass: ''
    })

    const login = () => {
        console.log(user.value);
        
    }
</script>

<style scoped>

</style>