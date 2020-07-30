<template>
  <main class="container h-screen mx-auto flex justify-center items-center">
    <div class="grid grid-rows-2 grid-cols-2 gap-4 border-2 border-gray-500 p-4">
      <button
        v-for="color in ['bg-red-600', 'bg-green-600', 'bg-blue-600', 'bg-yellow-600']"
        :key="color"
        v-ripple
        class="text-lg font-semibold focus:outline-none h-32 w-32 px-8 py-2"
        :class="color"
      >
        Click Me
      </button>
    </div>
  </main>
</template>
