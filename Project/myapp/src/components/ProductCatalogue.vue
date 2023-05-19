<template>
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sr. No.</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
             <tr v-for="(product, index) in products" :key="product.id">
                <td><input type="checkbox"></td>
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
            </tr>
        </tbody>
      </table>
      <button @click="submitCatalogue">Submit</button>
    </div>
  </template>

<script>
  export default {
      name: 'ProductCatalogue',

      data() {
    return {
      products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' },
        { id: 5, name: 'Product E' }
      ]
    };
  },
  methods: {
    submitCatalogue() {
      // This method will be called when the user clicks the "Submit" button
      console.log('Catalogue submitted!');
    }
  }
 
  };
</script>



<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
}

</style>