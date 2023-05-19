<script>
import router from "..router/index"
import axios from "axios"
export default {
    name: "Login",
    data() {
        return{
            loginData:{
                username: null,
                password: null
            }
        }
    },
    methods: {
        login(e){
            e.preventDefault()
            let username = "username"
            let password = "password"
            let login = () => {

                let data = {
                    username: username,
                    password: password
                }

                console.log("loginFunction", this.loginData)
                axios.post("/api/login", this.loginData)
                .then((response) => {
                    console.log("Logged in")
                    router.push("/dashboard")
                })
                .catch((error) => {
                    console.log("Cannot log in")
                })
            }
            login()
        }
    }
        
}
</script>

<template>
    <div>
        <form v-on:submit="login">
            Username: <input type="text" v-model="loginData.username" name="username">
            Password: <input type="text" v-model="loginData.password" name="password">
            <input type="submit" value="login">
        </form>
    </div>
</template>