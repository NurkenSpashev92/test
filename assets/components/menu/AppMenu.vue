<template>
	<div class="layout-menu-container">
		<AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" @keydown="onKeyDown" />
	</div>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array
	},
    methods: {
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },
		onKeyDown(event) {
			const nodeElement = event.target;
			if (event.code === 'Enter' || event.code === 'Space') {
				nodeElement.click();
				event.preventDefault();
			}
		}
    },
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>
<style>
.layout-menu li a.router-link-exact-active {
    color: rgba(28, 46, 69, 0.6) !important;
}
.layout-menu li .layout-menuitem-root-text {
    background: rgba(28, 55, 90, 0.04);
    padding: 10px 22px;
}
</style>
