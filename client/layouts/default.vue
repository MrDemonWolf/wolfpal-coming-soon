<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-primary-900">
    <Nuxt class="flex-grow" />
    <footer>
      <div class="px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-center space-x-6">
          <a
            href="https://www.twitter.com/mrdemonwolf"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <fa
              :icon="['fab', 'twitter']"
              class="w-6 h-6 text-2xl text-gray-400 transition duration-200 ease-in-out dark:text-gray-200 hover:text-brand-twitter dark:hover:text-brand-twitter"
            />
          </a>

          <a
            href="https://www.github.com/mrdemonwolf/wolfpal"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">GitHub</span>
            <fa
              :icon="['fab', 'github']"
              class="w-6 h-6 text-2xl text-gray-400 transition duration-200 ease-in-out dark:text-gray-200 hover:text-brand-github dark:hover:text-gray-400"
            />
          </a>

          <a
            href="https://www.twitch.tv/mrdemonwolf"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <fa
              :icon="['fab', 'twitch']"
              class="w-6 h-6 text-2xl text-gray-400 transition duration-200 ease-in-out dark:text-gray-200 hover:text-brand-twitch dark:hover:text-purple-400"
            />
          </a>
        </div>
        <div class="flex justify-center my-4">
          <button
            type="button"
            aria-label="Color Theme"
            class="px-3 py-2 text-sm font-medium leading-4 text-gray-500 border border-transparent rounded-md shadow-sm bg-primary-100 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="
              $colorMode.value === 'dark'
                ? ($colorMode.preference = 'light')
                : ($colorMode.preference = 'dark')
            "
          >
            <fa
              v-if="$colorMode.value === 'dark'"
              :icon="['fas', 'sun']"
              class="w-4 h-4 text-xl align-middle"
            />
            <fa
              v-else
              :icon="['far', 'moon']"
              class="w-4 h-4 text-xl align-middle"
            />
            <span class="pl-1">{{
              $colorMode.value === 'dark' ? 'Light' : 'Dark'
            }}</span>
          </button>
        </div>

        <p
          class="text-base text-center text-gray-400 xl:text-center dark:text-gray-200"
        >
          &copy; {{ year }}
          <a class="font-bold" href="https://www.mrdemonwolf.me">
            MrDemonWolf </a
          >. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
