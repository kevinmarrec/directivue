<template>
  <main class="container h-screen mx-auto flex flex-col justify-center items-center">
    <div class="grid gap-2">
      <div>
        <label for="autofocus" class="block text-2xl font-semibold mb-4">
          AutoFocus
        </label>
        <input id="autofocus" v-auto-focus class="focus:outline-none w-full bg-transparent border-2 border-gray-500 rounded-md mb-4 px-4 py-2" placeholder="Type some text...">
      </div>
      <div>
        <div class="text-2xl font-semibold mb-4">
          Ripple
        </div>
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
      </div>
    </div>
  </main>
</template>
