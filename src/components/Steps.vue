<template>
  <div class="steps">
    <div class="boll-area mb-3" :class="{'active': boll.active}" v-for="boll of bolls" :key="boll.label">
      <div class="boll" :class="{'active': boll.active}"></div>
      <p class="label text-center mt-3 font-weight-bold w-100 d-block">{{ boll.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bolls'],
  data: () => ({
    // bolls: [
    //   {
    //     label: 'Em preparo',
    //     active: true
    //   },
    //   {
    //     label: 'Despachado',
    //     active: false
    //   },
    //   {
    //     label: 'Em transito',
    //     active: false
    //   }
    // ]
  })
}
</script>

<style lang="scss" scoped>
@import './../styles/steps.scss';
</style>


