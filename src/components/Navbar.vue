<template>
  <nav class="container mx-auto flex items-center justify-between py-8">
    <div class="relative hover:shadow-sm">
      <input class="outline-none rounded-lg border border-gray-100 xl:w-96 md:w-56 placeholder-gray-500::placeholder font-sans font-medium py-3 pl-12 pr-3" type="text" placeholder="Поиск блюд">
      <img class="absolute top-3 left-3" src="../assets/search.svg">
    </div>
    <div class="flex items-center gap-3">
      <div class="flex-shrink-0 flex items-center gap-3.5 p-2 bg-gray-50 w-44 cursor-pointer hover:shadow rounded-lg">
        <img src="../assets/all-wishes-icon.svg">
        <span class="font-sans text-gray-700 font-medium">Все блюда</span>
      </div>
      <div class="flex-shrink-0 flex items-end gap-3.5 p-2 px-4 bg-red-500 w-44 cursor-pointer hover:shadow rounded-lg">
        <img src="../assets/coca-cola.svg">
        <span class="font-sans text-white font-medium">combo</span>
      </div>
      <div class="flex-shrink-0 flex items-center gap-3.5 p-2 bg-gray-50 w-44 cursor-pointer hover:shadow rounded-lg">
        <img src="../assets/sale-icon.svg">
        <span class="font-sans text-gray-700 font-medium">Скидки</span>
      </div>
      <div class="flex-shrink-0 flex items-center gap-3.5 p-3 pl-16 bg-gray-50 w-44 cursor-pointer hover:shadow rounded-lg">
        <span class="font-sans text-gray-700 font-medium">Другие</span>
        <img src="../assets/arrow-down.svg">
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>