<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- color mixin -->
      <color-mixin />
      <tab-menu :model="items"></tab-menu>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import ColorMixin from './components/ColorMixin'
import TabMenu from 'primevue/tabmenu'

export default {
  name: 'App',
  components: {
    AppHeader,
    ColorMixin,
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
          label: 'Calendar',
          icon: 'pi pi-fw pi-calendar',
          to: '/calendar'
        },
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          to: '/edit'
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
