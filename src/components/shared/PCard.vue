<template>
  <div class="p-card w-100 bg-white">
    <header class="header">
      <slot name="header"></slot>
    </header>

    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/pcard.scss';
</style>

