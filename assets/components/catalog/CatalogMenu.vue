<template>
  <div class="col-12 md:col-6">
      <div class="card">
          <h5>{{ model[0].label }}</h5>
          <div id="pv_id_112" class="p-panelmenu p-component">
		    <template v-for="(item,i) of model[0].items">
              <div class="p-panelmenu-panel">
                  <!-- <div class="p-panelmenu-header" tabindex="0" role="button" aria-label="Customers" aria-expanded="false">
                      <div class="p-panelmenu-header-content">
                          <a class="p-panelmenu-header-action" tabindex="-1" @click="showItem(item.id)">
                              <span class="p-submenu-icon pi pi-chevron-right"></span>
                              <span class="p-menuitem-text">{{ item.label }}</span>
                          </a>
                      </div>    
                  </div> -->
                    <button class="accordion" @click="toggleAccardion">{{ item.label }}</button>
                    <div class="panel">
                        <p>{{ item }}</p>
                    </div>
              </div>
            </template>
          </div>
      </div>
  </div>
</template>

<script>
export default {
	name: 'appsubmenu',
    props: {
        model: Array
    },
    mounted() {
      for(let item of this.model) {
        console.log(item.items)
      }
    },
    methods: {
        showItem: function(item) {
            console.log(item)
        },
        toggleAccardion: function() {
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                    } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                });
            }
        }
    },
}
</script>
