<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- menu -->
      <tab-menu :model="items"></tab-menu>

      <!-- router view -->
      <router-view />
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import TabMenu from 'primevue/tabmenu'

export default {
  name: 'App',
  components: {
    AppHeader,
    TabMenu
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
          label: 'My Colors',
          icon: 'pi pi-fw pi-palette',
          to: '/mycolors'
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
