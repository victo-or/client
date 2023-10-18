<template>
    <div>
        <h1>Ajouter un produit</h1>
        <div class="product">
          <!-- Section-->
            <form>
              <div
                class="
                  row
                  gx-4 gx-lg-5
                  row-cols-2 row-cols-md-3 row-cols-xl-2
                  justify-content-center
                "
              >
                <div class="col-sm-12">
                  <div v-show="message" class="alert alert-danger">{{message}}</div>
                  <div class="needs-validation" novalidate>
                    <div class="row g-2">
                      <div v-if="!submitted">
                      <div class="col-12">
                        <label for="productNom" class="form-label"
                          >Nom de produit</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="productNom"
                          v-model="product.nom"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">Un nom valide est requis.</div>
                      </div>
                      <div class="col-12">
                        <label for="productPhoto" class="form-label"
                          >Photo</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="productPhoto"
                          v-model="product.photo"
                          placeholder=""
                          required
                        />
                        <div class="invalid-feedback">
                          Une photo valide est requise.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="productPrix" class="form-label">Prix</label>
                        <div class="input-group has-validation">
                          <!-- <span class="input-group-text">CAD</span> -->
                          <input
                            type="text"
                            class="form-control"
                            id="productPrix"
                            v-model.number="product.prix"
                            placeholder=""
                            required
                          />
                          <div class="invalid-feedback">Le prix est requis.</div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="productDescription" class="form-label"
                          >Description</label
                        >
                        <textarea
                          class="form-control"
                          id="productDescription"
                          v-model="product.description"
                          placeholder=""
                        ></textarea>
                        <div class="invalid-feedback">Description</div>
                      </div>
                      <div class="col-12">
                        <label for="productCategorie" class="form-label"
                          >Catégorie</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="productCategorie"
                          v-model="product.categorie"
                          placeholder=""
                          required
                        >
                        <div class="invalid-feedback">
                          Valid photo path is required.
                        </div>
                      </div>
                      <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveProduct">Enregistrer</button>
                      </div>
                      <div v-else>
                        <div  class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Produit soumis!</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">Ajouter un produit</button>
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
