<template>
  <div>
    <h1>Fiche produit</h1>
    <div class="product d-flex flex-column">
      <div v-if="product">
        <div v-show="message" class="alert alert-success">{{message}}</div>
        <div class="col-md-8 container mt-2 pb-3"><img class="img-fluid mb-md-0" :src="require(`@/assets/img/450/${product.photo}`)" :alt="product.name" /></div>
        <div>
          <h3>{{product.nom}}</h3>
          <table>
            <tbody>
              <tr>
                <th>Description</th>
                <td>{{product.description}}</td>
              </tr>
              <tr>
                  <th>Prix</th>
                  <td>${{product.prix}}</td>
              </tr>
              <tr>
                  <th>Catégorie</th>
                  <td>{{product.categorie}}</td>
              </tr>
            </tbody>
          </table>
          <div class="button-container">
            <Router-link :to="{name: 'edit-product', params: {id: product.id}}" class="btn btn-modifier">Modifier</Router-link>
            <button class="btn btn-effacer" type="button" @click="deleteProduct">Delete </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Produit effacé!</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
        </div>
      <Router-link :to="{name: 'new-product'}" class="btn">Ajouter un produit</Router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['removeInv', 'inventory', 'updateInv'],
  data () {
    return {
      message: null,
      id: parseInt(this.$route.params.id)
    }
  },
  computed: {
    product () {
    // console.log('params', this.$route.params.id, typeof this.$route.params.id)
      const product = this.inventory.find((p) => {
        // console.log('p.id', p.id, typeof p.id)
        return p.id === parseInt(this.$route.params.id)
      })
      // console.log(product)
      return product
    },
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  },
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.id)
        .then(response => {
          this.removeInv(this.productIndex)
          // this.$router.push({ name: 'products' })
        })
    }
  },
  mounted () {
    ProductDataService.get(this.id)
      .then(response => {
        this.product = response.data
      })
  }
}

</script>
