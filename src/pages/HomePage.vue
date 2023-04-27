<template>
  
	<div class="page">
		<PageTitle>Home</PageTitle>
    <Message :closable="false" 
      severity="warn"
      class="border-primary w-full justify-content-start animate__animated"
			:class="{ animate__shakeY: isAnimated }">
      <div class="flex align-items-center">
        <div class="ml-2">
          Warning!!!! This app is still in development
        </div>
       </div>
    </Message>
		
	</div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
import Message from "primevue/message";

export default {
	name: "HomePage",
  components: {
    Message,
    PageTitle
  },
  data() {
    return {
      isAnimated: false,
    };
  },
  mounted() {
    setTimeout(() => { this.isAnimated = true }, 2000);
  },
};
</script>
