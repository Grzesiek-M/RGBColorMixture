<template>
  <div class="page">
    <page-title>Color </page-title>
    {{ $route.params.red }}
    {{ $route.params.green }}
    {{ $route.params.blue }}    

    <flask-item
      :size="10"
      style="margin: 3rem auto"
      :buttonsVisible="false"
      :amount="100" 
      :color="color"/>
  </div>
  
  <i class="pi pi-share-alt" id="share_it"></i>

  <input-text type="text" v-model="value" />

</template>

<script>
import InputText from "primevue/inputtext";
import FlaskItem from '@/components/shared/FlaskItem.vue';
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'ColorPage',
  components: {
    FlaskItem,
    InputText,
    PageTitle
  },
  data () {
		return {
			value: "localhost:8080/#" + this.$route.fullPath,
		};
	},
  created () {
		
		return	this.$route.params.red, this.$route.params.green,	this.$route.params.blue
		
	},
  computed: {
		color () {
			return `rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`;
		},
	},
}

</script>

<style lang="scss">
  #share_it {
    margin: 2rem 1rem;
    }
</style>