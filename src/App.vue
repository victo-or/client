<template>
  <div class="container">
    <header class="header">
        <!-- Logo de l'entreprise -->
        <h1 class='logo'>Super Pawn Shop</h1>
        <!-- Navigation contenant des liens vers différentes pages -->
        <nav>
            <!-- Lien vers la page d'accueil -->
            <router-link class='link' to="/">Accueil</router-link>
            <!-- Lien vers la page des produits -->
            <router-link class='link' to="/products">Produits</router-link>
        </nav>
        <!-- Affiche un bouton "+" (Ajouter) ou "x" (Fermer) sur la page des produits -->
    </header>
    <router-view
    :inventory = "inventory"
    :addInv = "addInventory"
    :removeInv = "removeInventory"
    :updateInv = "updateInventory"
    />
  </div>
  <footer>
    &copy; 2023 Super Pawn Shop. Tous droits réservés.
  </footer>
</template>

<script>
// import product from '@/product.json'
import ProductDataService from '@/services/ProductDataService'
export default {
  data () {
    return {
      showSideBar: false,
      // inventory: product, // lorsque ça venait de product.json
      inventory: [],
      cart: {}
    }
  },
  methods: {
    // toggleSidebar () {
    //   this.showSideBar = !this.showSideBar
    // },
    // addToCart (product, index) {
    //   if (!this.cart[product]) this.cart[product] = 0
    //   this.cart[product] += this.inventory[index].quantity
    //   // console.log(this.cart[product])
    // },
    // removeItem (name) {
    //   delete this.cart[name]
    // },
    addInventory (data) {
      this.inventory.push(data)
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    },
    updateInventory (index, data) {
      this.inventory[index].nom = data.nom
      this.inventory[index].photo = data.photo
      this.inventory[index].prix = data.prix
      this.inventory[index].description = data.description
      this.inventory[index].categorie = data.categorie
    }
  },
  // computed: {
  //   totalQuantity () {
  //     return Object.values(this.cart).reduce((acc, curr) => {
  //       return acc + curr
  //     }, 0)
  //   }
  // }
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}
</script>
