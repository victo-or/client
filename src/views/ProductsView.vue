<template>
  <div>
    <!-- Titre de la section des produits -->
    <h1>Produits</h1>
    <div class="button-container justify-content-end">
      <Router-link :to="{name: 'new-product'}" class="btn btn-ajouter">+ Ajouter</Router-link>
    </div>
    <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-2 justify-content-center product">
      <div v-for="(product, i) in inventory" :key="i" class="col mb-3">
        <div class="card h-100 products">
          <!-- Product image-->
          <img class="card-img-top p-3" :src="require(`@/assets/img/450/${product.photo}`)" :alt="product.name" />
          <!-- Product details-->
          <div class="card-body px-2">
              <div class="text-center">
                  <!-- Product nom-->
                  <h5 class="fw-bolder">{{product.nom}}</h5>
                  <!-- Product prix-->
                  <!-- toFixed(2) est une fonction JS pour décimaux -->
                  ${{product.prix.toFixed(2)}}
              </div>
          </div>
          <div class="p-3">
            <router-link :to="{name: 'product', params: {id:product.id}}" class="btn btn-voir">Voir</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['inventory', 'addTo']
}
</script>
