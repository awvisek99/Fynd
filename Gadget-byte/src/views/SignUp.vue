<template>
    <img class="logo" src="../assets/logo3.png"  />
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="register">Sign Up</button>
        <p>
        <router-link to="/login">Login</router-link>
        </p>

    </div>
</template>

<script>
import Axios from 'axios';


export default {
  name:"registrationLogin",
  methods: {
    async register() {
    // Request payload for registration
    const registrationData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    // Send POST request to backend /register endpoint
    await Axios.post('/api/register', registrationData)
      .then(response => {
        // Registration successful
        console.log('Registration successful:',response,registrationData);
        // console.log(result);
        this.$router.push({ name: 'Products' });
        localStorage.setItem("user-info",JSON.stringify( registrationData));
        alert("congratulation Registration Successful..");
        
        // TODO: Handle success scenario in frontend
      })
      .catch(error => {
        // Registration failed
        // console.error('Registration error:', error);
        if(error.response.status==409){
          alert("this account is already registered");
        }
        // TODO: Handle error scenario in frontend
      });
  }
  },
  mounted()
{
  let user=localStorage.getItem('user-info')
  if(user){
    this.$router.push({name:'Products'})
  }
},
  }
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