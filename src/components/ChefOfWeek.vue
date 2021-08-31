<template>
  <div class="container mx-auto px-5 sm:px-0">
    <h2 class="text-gray-800 font-sans text-3xl font-bold my-8">Повар недели</h2>
    <div class="border-2 rounded-lg border-gray-100 md:flex text-center md:text-left py-8 md:px-14 my-8 relative gap-12 items-center overflow-hidden">
      <div class="text-center w-52 mx-auto md:mx-16">
        <div class="w-52 h-52 object-cover overflow-hidden rounded-full border-4 border-gray-300">
          <img src="https://picsum.photos/200/300">
        </div>
        <h3 class="font-sans text-gray-700 my-3 font-medium text-2xl">Азиза Ахмедова</h3>
        <div class="flex flex-shrink-0 mx-auto w-36 gap-1">
          <img src="../assets/null-star.png" alt="">
          <img src="../assets/null-star.png" alt="">
          <img src="../assets/null-star.png" alt="">
          <img src="../assets/null-star.png" alt="">
          <img src="../assets/full-star.png" alt="">
        </div>
      </div>
      <div class="sm:w-80 w-60 mx-auto md:mx-16">
        <p class="text-xl font-medium font-sans text-gray-600 my-7">“Повар с образовнием, но всегда обучаюсьновому и учавствую во всех мастер классах”</p>
        <div class="sm:w-60 bg-gray-100 text-gray-700 font-medium font-sans p-2.5 text-center rounded-lg cursor-pointer mx-auto">
          <span>Посмотреть меню</span>
        </div>
      </div>
      <div class="relative hidden lg:block">
        <div class="w-44 h-44 rounded-full border-4 border-gray-300 absolute z-10 overflow-hidden object-cover -bottom-32">
          <img src="https://picsum.photos/200/300" alt="">
        </div>
        <div class="w-32 h-32 rounded-full border-4 border-gray-300 absolute z-10 overflow-hidden object-cover left-52 bottom-5">
          <img src="https://picsum.photos/190/300" alt="">
        </div>
        <div class="w-64 h-64 rounded-full border-4 border-gray-300 absolute z-10 overflow-hidden object-cove left-96">
          <img src="https://picsum.photos/300/300" alt="">
        </div>
        <div class="w-36 h-36 absolute bg-yellow-200 rounded-full -bottom-5 left-24"></div>
      </div>
    </div>
  </div>
</template>