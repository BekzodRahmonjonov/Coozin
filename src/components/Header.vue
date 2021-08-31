<template>
  <div class="border-b border-gray-200">
    <div class="container mx-auto">
      <header class="lg:py-2.5 py-4 flex items-center justify-between sm:px-0 px-5">
        <div class="xl:gap-14 gap-5 lg:gap-6 flex items-center">
          <a class="lg:hidden block flex-shrink-0">
            <img class="" src="../assets/menu-open.svg">
          </a>
          <a class="lg:block hidden">
            <img class="h-24" src="../assets/logo.svg" alt="Logo">
          </a>
          <address class="flex items-center gap-1.5 py-3 px-3.5 cursor-pointer hover:shadow-md border rounded-lg border-gray-100 sm:w-64 w-44">
            <img class="flex-shirink-0" src="../assets/location-marker.svg">
            <span class="font-sans font-medium text-gray-500">Aдрес</span>
          </address>
        </div>
        <ul class="items-center gap-10 2xl:mr-20 lg:flex hidden">
          <li>
            <a class="font-sans font-medium text-xl text-gray-800" href="#">О нас</a>
          </li>
          <li>
            <a class="font-sans font-medium text-xl text-gray-800 hover:opacity-80" href="#">Повара</a>
          </li>
          <li>
            <a class="font-sans font-medium text-xl text-gray-800 hover:opacity-80" href="#">Стать поваром</a>
          </li>
        </ul>
        <div class="flex gap-4">
          <div class="p-2.5 bg-gray-100 rounded-lg cursor-pointer">
            <span class="text-xl text-gray-800 font-medium">UZ</span>
          </div>
          <div class="p-3 px-3.5 cursor-pointer flex-shrink-0 bg-gray-100 rounded-lg sm:block hidden">
            <img class="w-5" src="../assets/basket.svg">
          </div>
          <button class="w-28 p-2.5 text-center bg-yellow-500 rounded-lg text-white font-medium sm:block hidden">Войти</button>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>