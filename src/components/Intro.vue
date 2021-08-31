<template>
  <section class="container mx-auto">
    <div class="intro h-72 hidden sm:block">
      <div class="intro-item overflow-hidden">
        <div class="lg:py-20 lg:px-16 sm:py-10 sm:px-10 text-center">
          <h1 class="text-white md:font-semibold md:text-5xl md:leading-normal sm:font-medium sm:text-4xl sm:leading-tight md:mt-0 sm:mt-10">Удовольствие от любимых блюд, не выходя из офиса или дома!</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .intro {
    background: url('../assets/banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }
  .intro-item {
    background-color: rgba(0, 0, 0, 0.582);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 55;
  }
</style>