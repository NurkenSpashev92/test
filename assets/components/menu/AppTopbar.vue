<template>
    <div class="layout-topbar">
        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>
        <h2 class="text-h2">Вылеты</h2>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Variedades y empaque'
    }
  },
  methods: {
    onMenuToggle(event) {
      this.$emit('menu-toggle', event);
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event);
    }
  }
}
</script>
<style scoped>
.text-h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: rgba(28, 46, 69, 0.6);
    margin: 0 35px;
}
.layout-topbar .layout-menu-button {
    margin-left: 0;
}
.pi-bars {
    color: #1676F3;
}
</style>
