<template>
    <div>
      <h1>Modifier un produit</h1>
      <div class="product">
        <div class="needs-validation" novalidate>
          <div class="input form-control">
            <label class="form-label">
                Nom
                <input
                type="text"
                class="form-control"
                v-model="product.nom"
                required
                />
            </label>
            <label class="form-label">
                Photo
                <input
                type="text"
                class="form-control"
                v-model="product.photo"
                required
                />
            </label>
            <label class="form-label">
                Description
                <input
                type="text"
                class="form-control"
                v-model="product.description"
                required
                />
            </label>
            <label class="form-label">
                Prix
                <input
                type="number"
                step="0.01"
                class="form-control"
                v-model="product.prix"
                required
                />
            </label>
            <label class="form-label">
                Catégorie
                <input
                type="text"
                class="form-control"
                v-model="product.categorie"
                required
                />
            </label>
            <input type="submit" class="btn btn-modifier" value="Mettre à jour" @click="updateProduct"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'updateInv'],
  data () {
    return {
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          this.updateInv(this.productIndex, this.product)
          // console.log(response.data.message)
          this.$router.push({ name: 'product' })
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
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
