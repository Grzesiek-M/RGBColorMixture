<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <!-- mixture effect -->
    <flask-item
      :size="15"
      style="margin: 3rem auto"
      :color="mixtureEffectFill"
      :buttonsVisible="false"
      :amount="100" />

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
        <ModelItem
        v-if="modalVisible"
        @cancel="modalVisible = false"
        ></ModelItem>
        <ModalItem v-if="modalVisible" @cancel="modalVisible = false">
        <template v-slot:header> About the app </template>

        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>

        <template v-slot:footer>

        </template>
      </ModalItem>
  </div>

</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtomItem from './shared/ButtomItem.vue'
import ModalItem from './ModalItem.vue'

export default {
  data: () => ({ modalVisible: false }),
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    }
  },
  components: {
    FlaskItem,
    ButtomItem,
    ModalItem
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
