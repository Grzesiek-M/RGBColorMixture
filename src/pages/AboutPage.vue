<template>
  <div class="page">
    <PageTitle>About</PageTitle>
    <p>This app was built with Vue.js </p>
    <img
      @click="logoo" 
      class="animate__animated" 
      src="@/assets/logo.png" 
      :class="{ animate__jackInTheBox: isAnimated }"
      @animationend="isAnimated = false">
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  name: 'AboutPage',
data() {
		return {
			isAnimated: false,
		}
	},
  components: { PageTitle },
  methods: {
		logoo() {
			this.isAnimated = true;
		},
	},
}
</script>
