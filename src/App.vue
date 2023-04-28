<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- menu -->
      <tab-menu :model="items"></tab-menu>
      
      <slide-fade-animation>
      <!-- router view -->
      <router-view/>
      </slide-fade-animation>
     
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import TabMenu from 'primevue/tabmenu'
import SlideFadeAnimation from './components/shared/SlideFadeAnimation.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    TabMenu,
    SlideFadeAnimation
  },
  data () {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Mixin',
          icon: 'pi pi-fw pi-filter',
          to: '/Mixin'
        },
        {
          label: 'about',
          icon: 'pi pi-fw pi-info',
          to: '/about'
        },
        {
          label: 'My Color',
          icon: 'pi pi-fw pi-palette',
          to: '/mycolor'
        }
      ]
    }
  }
}

</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
