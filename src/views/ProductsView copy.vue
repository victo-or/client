<template>
<!-- Titre de la section des produits -->
  <div>
    <h1>Produits</h1>
    <div class="button-container justify-content-end">
      <Router-link :to="{name: 'new-product'}" class="btn">Ajouter</Router-link>
    </div>
    <div v-for="(product, i) in inventory" :key="i" class="col mb-5">
      <div class="card h-100 product">
        <!-- Product image-->
        <!-- <img class="card-img-top" :src="require(`@/assets/img/450/${product.photo}`)" :alt="product.name" /> -->
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{product.nom}}</h5>
                <!-- Product price-->
                <!-- toFixed(2) est une fonction JS pour décimaux -->
                ${{product.prix.toFixed(2)}}
            </div>
        </div>
            <p>
                <!-- <router-link :to="`/product/${product.name}`">See more...</router-link> -->
                <router-link :to="{name: 'product', params: {id:product.id}}">See more...</router-link>
            </p>
      </div>
    </div>
      <div class="product">
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
          <!-- <button class="modify-button">Modifier</button>
          <button class="delete-button">Effacer</button> -->
          <router-link :to="{name: 'product', params: {id:product.id}}" class="btn">Voir produit</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['inventory', 'addTo']
}
</script>
