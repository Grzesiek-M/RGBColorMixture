<template>
<li class="mixtures__mixture">

      <button-item
        @click="$emit('decrement')"
        class="mixtures__mixture__btn mixtures__mixture__btn--left">
        <span
          class="fas fa-arrow-down" />
      </button-item>

      <div
        :class="`mixtures__mixture__fill mixtures__mixture__fill--${mixture.variant}`"
        :style="{ height: mixture.amount + '%' }" />

      <button-item
        @click="$emit('increment')"
        class="mixtures__mixture__btn mixtures__mixture__btn--right">
        <span
          class="fas fa-arrow-up" />
      </button-item>

  </li>

</template>

<script>
import ButtonItem from './shared/ButtonItem.vue'
export default {
  name: 'MixtureItem',
  props: {
    mixture: {
      type: Object,
      required: true
    },
    components: {
      ButtonItem
    }
  }
}
</script>

<style scoped lang="scss">

.mixtures__mixture {
  display: block;
  width: 10rem;
  height: 10rem;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 2rem 1rem;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background-color: #9a9a9a;
  background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
  -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.5);
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);

  &__fill {
    width: 100%;
    height: 100%;
    transition: .2s;

    &--red {
      background-color: #ff7d3b;
      background-image: linear-gradient(189deg, #ff7d3b 0%, #FF2525 74%);
    }

    &--green {
      background-color: #2e561c;
      background-image: linear-gradient(0deg, #2e561c 0%, #2AF598 100%);
    }

    &--blue {
      background-color: #25b6bf;
      background-image: linear-gradient(183deg, #25b6bf 0%, #0070a2 100%);
    }

  }

  &__btn {
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    -webkit-box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
    box-shadow: 0 20px 40px 0 rgba(107,154,212,.1);
    transition: .3s;
    outline: none;
    color: #637892;

    &--right {
      right: 1rem;
      &:hover {
        margin-top: -0.5rem;
      }
    }

    &--left {
      left: 1rem;
      &:hover {
        margin-top: 0.5rem;
      }
    }
  }

}
</style>
