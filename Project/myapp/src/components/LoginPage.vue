<template>
 <img class="logo" src="../assets/logo.png"  />
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
    export default {
      name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      // Perform login logic here, e.g. using axios to submit the form data to an API
    }
  }
}
</script>
  

  






