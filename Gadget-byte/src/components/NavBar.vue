<template>
  <div>
    <div class="container"> 
  
  <div id="nav-bar"> 
      
    <router-link to="/products" id="products-link">
      <h1>Gadget-Byte</h1>
     
    </router-link>
  </div>
  <!-- <marquee class='m' behavior="scroll" direction="up" scrollamount="5">Welcome to Shah Group Pvt Ltd</marquee> -->
  <router-link to="/cart" id="cart-link">
    <button>Shopping Cart</button>
  </router-link>
 
 
 
 <div>
  <button class="btn" v-on:click="logout">Logout</button>
  
 </div>
 </div>
 <div class="ok"><h4>{{email}}</h4></div>
 
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
    return {
    
    email:""
    }; 
  },
    methods:{
      logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    this.email = JSON.parse(user).email;
    if (!user) {
      this.$router.push({ name: "Login"});
    }
  },
}
</script>

<style scoped>



@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.img1{
  margin: 10px;
  margin-right: 10px;
  animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
 
}
  #nav-bar {
  
    height: 75px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
    margin-left: 45px;
    margin-top:12px;;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
   display: flex;
   justify-content: flex-end;
   margin-top:17px;
   margin-right: 10px;
   text-decoration: none;
   height: 55px;
   width: 100%;
  }
.ok{
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}


 
  
 
  

  .container{
    display:flex;
  background-color: whitesmoke;
  
  }

  button {
    background-color: black;
    color: white;
   
  }
  .btn {
    height: 55px;
    margin-top: 15px;
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
 
  h4{
    color:black;
  }
</style>