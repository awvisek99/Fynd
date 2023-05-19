<template>
    <img class="logo" src="../assets/logo.png"  />
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signup">SignUp</button>
        <p>
        <router-link to="/login">Login</router-link>
        </p>

    </div>
</template>

<script>

    export default {
        name: 'SignUp',
        data()
        {
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods: {
             signup() {
                
            }
        },
        mounted() {
            
        },
    }
</script>