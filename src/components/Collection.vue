<template>
  <div class="container mx-auto sm:px-0 px-5">
    <h2 class="text-gray-800 font-sans text-3xl font-bold my-8">Коллекции</h2>
    <div class="flex item-start gap-20 flex-wrap justify-center">
      <div class="flex gap-20 flex-wrap justify-center">
        <div>
          <img src="../assets/collection.png" alt="Collection image">
        </div>
        <div>
          <img src="../assets/collection2.png" alt="Collection image">
        </div>
      </div>
      <div class="flex gap-20 flex-wrap justify-center">
        <div>
          <img src="../assets/collection.png" alt="Collection image">
        </div>
        <div>
          <img src="../assets/collection2.png" alt="Collection image">
        </div>
      </div>
    </div>
    
      <!-- <div class="flex gap-20">
        <VueSlickCarousel v-bind="settings">
          <div class="m-5">
            <img src="../assets/collection.png" alt="Collection image">
          </div>
          <div class="m-5">
            <img src="../assets/collection2.png" alt="Collection image">
          </div>
          <div class="m-5">
            <img src="../assets/collection.png" alt="Collection image">
          </div>
          <div class="m-5">
            <img src="../assets/collection2.png" alt="Collection image">
          </div>
        </VueSlickCarousel>
      </div> -->
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    // name: 'MyComponent',
    // components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        "dots": true,
        "infinite": true,
        "centerMode": true,
        "centerPadding": "20px",
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "variableWidth": true,
        "arrows": false
        },
      // slickOptions: {
      //   slidesToShow: 3,
      //   arrows: false
      // }
      }
    }
  }
</script>
