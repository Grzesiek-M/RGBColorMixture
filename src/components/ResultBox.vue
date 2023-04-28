<template>

  <div>  
     <!-- text between -->
     <p
       v-text="'And the result...'" />
 
     <!-- mixture effect -->
     <flask-item
       :size="10"
       style="margin: 3rem auto"
       :color="mixtureEffectFill"
       :buttonsVisible="false"
       :amount="100" />
 
     <!--rgb x x x -->
     <p v-text="mixtureEffectFill"></p>

     <p>There are {{ howMuchColor  }} colors in your pocket{{ colors.length  }}</p>

     <!-- refresh btn -->
     <buttom-item
       @click="$emit('refresh')"
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
        icon="sync" />
 
     <buttom-item
        @click="modalVisible = true"
        :size="4"
        :movement="0.5"
        :font-size="1.5"
        icon="question"/>
      
      <buttom-item
        @click="saveColor" 
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
         icon="pencil" />
   
     <fade-animation> 
      <modal-item v-if="modalVisible" @cancel="modalVisible = false">
        <template v-slot:header> About the app </template>
        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>
        <template v-slot:footer>
        </template>
      </modal-item>
      
     </fade-animation>

     <RouterLink :to="createLink">
       <buttom-item
         :size="4"
         :movement="0.5"
         :font-size="1.5"
         icon="share-alt"/>
     </RouterLink>
     <!-- help modal --->
     <transition name="slide-fade"></transition>
       
   </div>
 
 </template>
 
 <script>
 import FadeAnimation from './shared/FadeAnimation.vue'
 import FlaskItem from './shared/FlaskItem.vue'
 import ButtomItem from './shared/ButtomItem.vue'
 import ModalItem from './ModalItem.vue'
 import { mapState } from 'vuex'
 import { mapGetters ,mapActions } from 'vuex'


 export default {
   data: () => ({ modalVisible: false }),
   name: 'ResultsBox',
   props: {
     mixtures: {
       type: Array,
       required: true
     }
   },
   methods: {
    saveColor () {
      this.addColor(this.mixtures)
     
      console.log("testowy test")
    },
    ...mapActions(['addColor']),

  },
  mutations: {
    ADD_COLOR (state, color) {
  state.colors.push(color)
}
  },
   computed: {  
    ...mapState(['colors']),
    ...mapGetters({ colors: 'RGBColors' }),
    ...mapGetters({ howMuchColor: "CountColors" }),
    
    mixtureEffectFill () {
       const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
         Math.floor(item.amount * 2.5)
       )
       return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
  
    createLink () {
       const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
         Math.floor(item.amount * 2.5)
       )
       return `color/${redCol}/${greenCol}/${blueCol}`
    },
   
     
   },
   components: {
     FlaskItem,
     ButtomItem,
     ModalItem,
     FadeAnimation
   }
 }
 </script>
 
 <style scoped lang="scss">
 .refresh-btn {
   background-color: #9a9a9a;
   background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
   width: 4rem;
   height: 4rem;
   border: none;
   border-radius: 50%;
   cursor: pointer;
   -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
   box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
   transition: .3s;
   outline: none;
   font-size: 1.5rem;
   color: #637892;
 
   &:hover {
     margin-top: -0.5rem;
   }
 }
 </style>
 