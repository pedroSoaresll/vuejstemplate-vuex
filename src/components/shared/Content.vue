<template>
  <!-- content -->
  <section class="content">
    <!-- header -->
    <header class="content-header">
      <span>{{ title }}</span>
    </header>

    <!-- content -->
    <div class="content-main">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title'] 
}
</script>

<style lang="scss" scoped>
@import '@/styles/content.scss';
</style>


