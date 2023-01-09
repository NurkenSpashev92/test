<template>
  <div :class="containerClass">
    <div class="layout">
      <CatalogMenu :model="menu"/>
    </div>
  </div>
</template>

<script>
import CatalogMenu from "../catalog/CatalogMenu.vue";

export default {
  name: "catalog",
  components: {
    CatalogMenu
  },
  data() {
    return {
      staticMenuInactive: true,
      overlayMenuActive: true,
      mobileMenuActive: false,
      menu : [
        {
          label: 'Catalog',
          items: [
            {id: 1, label: 'Grupos', to: '/grupos', title:'Palabra clave'},
            {id: 2, label: 'ROSA ESTANDRA', items: [
                {id: 3, label: "ROSA ESTANDRA AMARIO", to: "/home", items: [
                    {label: "DEJA VU", to: "/home", title:'DEJA VU'},
                    {label: "GEISHA", to: "/home", title:'GEISHA'},
                  ]
                },
                {id: 4,label: "ROSA GARDEN", to: "/home", items: [
                    {label: "CRASPEDIA JUMBO", to: "/home", title:'CRASPEDIA'},
                    {label: "LIMONIUM", to: "/home", title:'LIMONIUM'},
                  ]
                }
              ]},
            {id: 5, label: "CLAVEL", to: "/home", title:'CLAVEL'}
          ]
        },
      ]
    }
  },
  methods: {
  },
  computed: {
    containerClass() {
      return ['layout-wrapper', {
        'p-toggleable-content': this.layoutMode === 'overlay',
        'p-panelmenu-header-content': this.layoutMode === 'static'
      }];
    }
  },
}
</script>