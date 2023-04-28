<template>
  <div class="page">
    <page-title>Color </page-title>
    
    <Message
      v-if="noError"
      severity="error"
      class="border-primary w-full"
		>
    <div class="flex align-items-center">
      <div class="ml-2">
        This color is invalid! It's not RGB formt
      </div>
    </div>
    </Message>
    <div v-if="!noError">
      <flask-item
        :size="10"
        style="margin: 3rem auto"
        :buttonsVisible="false"
        :amount="100" 
        :color="color"/>
         <i class="pi pi-share-alt" id="share_it" />
        <input-text type="text" v-model="value" />
</div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext"
import FlaskItem from '@/components/shared/FlaskItem.vue'
import PageTitle from '@/components/PageTitle.vue'
import Message from "primevue/message"

export default {
  name: 'ColorPage',
  components: {
    FlaskItem,
    InputText,
    PageTitle,
    Message
  },
  data () {
		return {
      
			value: "localhost:8080/#" + this.$route.fullPath,
		};
	},
  created () {
    if (
			this.$route.params.red > -1 &&
			this.$route.params.green > -1 &&
			this.$route.params.blue > -1 &&
			this.$route.params.red < 256 &&
			this.$route.params.green < 256 &&
			this.$route.params.blue < 256 &&
      this.$route.params.red !== "string" &&
			this.$route.params.green !== "string" &&
			this.$route.params.blue !== "string"
		) {
			
			this.noError = false;
    }
    else{
      this.noError = true;
    }
		
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