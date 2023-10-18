<template>
  <div>
    <h1>Ajouter un produit</h1>
    <div class="product">
      <form @submit.prevent="saveProduct">
        <div class="justify-content-center">
          <div class="col-sm-12">
            <div v-show="message" class="alert alert-danger">{{ message }}</div>
            <div class="needs-validation" novalidate>
              <div class="input form-control">
                <div v-if="!submitted">
                  <div>
                    <label class="form-label">
                      Nom de produit
                      <input
                        type="text"
                        class="form-control"
                        v-model="product.nom"
                        placeholder=""
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="form-label">Photo
                      <input
                        type="text"
                        class="form-control"
                        v-model="product.photo"
                        placeholder=""
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="form-label">Prix
                      <input
                        type="number"
                        step="0.01"
                        class="form-control"
                        v-model.number="product.prix"
                        placeholder=""
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="form-label">Description
                      <input
                        type="text"
                        class="form-control"
                        v-model="product.description"
                        placeholder=""
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label class="form-label">Catégorie
                      <input
                        type="text"
                        class="form-control"
                        v-model="product.categorie"
                        placeholder=""
                        required
                      />
                    </label>
                  </div>
                  <button class="w-100 btn btn-secondary btn-lg mt-3 btn-ajouter" type="submit">Ajouter</button>
                </div>
                <div v-else>
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Produit soumis!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
                  </div>
                  <button class="w-100 btn btn-success btn-lg mt-3 btn-ajouter" type="button" @click="newProduct">Ajouter un autre produit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['addInv'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {
        nom: null,
        photo: null,
        prix: null,
        description: null,
        categorie: null
      }
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then(response => {
          this.product.id = response.data.id
          this.addInv(this.product)
          this.submitted = true
          this.message = null
        })
        .catch(error => {
          this.message = error.response.data.message
        })
    },
    newProduct () {
      this.submitted = false
      this.product = {}
    }
  }
}
</script>
