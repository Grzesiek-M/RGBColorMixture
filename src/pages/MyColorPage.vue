<template>
  <div class="page">
    <PageTitle>My Color Page</PageTitle>
   
    <ul class="mixtures">
			<li :key="index" v-for="(color, index) in colors">
				<FlaskItem
					style="margin: 3rem auto"
					:amount="100"
          :buttonsVisible="false"
					:buttonsVisibleTrash="true"
					:size="12"
					:color="color" 
          @removeColor="removeColor(index)"/>
        </li>
		</ul>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import {mapGetters } from 'vuex'
import FlaskItem from '@/components/shared/FlaskItem.vue'

export default {
  name: 'MyColorPage',
  components: {
    PageTitle,
    FlaskItem   
  },
  methods: {
		removeColor(index) {
      this.$store.commit("REMOVE_COLOR", index);
    
    }
  },
  computed: {
    ...mapGetters({ colors: "RGBColors" }),
    
    
  } 
  
}
</script>
