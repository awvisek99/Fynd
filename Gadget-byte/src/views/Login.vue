<template>
    <img class="logo" src="../assets/logo3.png"  />
       <h1>Login</h1>
   <div class="login">
       <input type="text" v-model="email" required placeholder="Enter Email" />
       <input type="password" v-model="password" required placeholder="Enter Password" />
       <button v-on:click="login">Login</button>
       <p>
           Don't have an account yet?
       <router-link to="/sign-up">Sign Up</router-link>
       </p>

   </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      // Request payload for login
      const loginData = {
        email: this.email,
        password: this.password,
      };

      // Send POST request to backend / endpoint
   await Axios.post('/api/', loginData)
        .then((response) => {
          // Login successful
         
          localStorage.setItem("user-info",JSON.stringify(loginData))
          // console.log(result);
          this.$router.push({ name: 'Products' });
          console.log("Login successful:", response);
          alert(" congratulation Login Successful ");
          // TODO: Handle success scenario in frontend, e.g. show success message, redirect to a different page, etc.
        })
        .catch((error) => {
          // Login failed
          if (error.response) {
            // Handle known response codes
            if (error.response.status === 404) {
              alert("User not found");
            } else if (error.response.status === 401) {
              alert("Invalid password");
            } else {
              alert("Login failed");
            }
          } else if (error.request) {
            // Handle Axios request errors
            this.error = "Request error: " + error.request;
          }
          console.error("Login error:", error);
        });
    },
  },

  mounted()
{
  let user=localStorage.getItem('user-info')
  if(user){
    this.$router.push({name:'Products'})
  }
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body {
  padding: 0;
  margin: 0;
}

.logo{
        width:100px
    }
    .register input, .login input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;

    }
    .register button, .login button {
        width: 320px;
        height: 40px;
        border: 1px skyblue;
        background: skyblue;
        color: white;
        cursor: pointer;
    }
</style>