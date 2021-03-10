<template>
  <div class="flex items-center justify-center">
    <div class="p-2">
      <div class="text-center">
        <Logo class="inline-block w-auto h-32" />
      </div>
      <h1
        class="py-6 text-4xl font-extrabold text-center text-primary-500 dark:text-white font-roboto"
      >
        We're preparing for launch
      </h1>

      <p
        class="w-full mx-auto text-xl text-gray-900 dark:text-white md:w-1/2 font-montserrat"
      >
        Wolf is coming to your door very soon. Next gen
        <span class="font-bold text-primary-500 dark:text-primary-300"
          >motivational tracker</span
        >
        that supports your
        <span class="font-bold text-primary-500 dark:text-primary-300"
          >life's goals.</span
        >
        Out on
        <span class="font-bold text-primary-500 dark:text-primary-300"
          >Early June</span
        >
        - sign up today.
      </p>
      <form class="w-full mx-auto mt-6 md:w-2/3">
        <div class="grid grid-cols-8 gap-3">
          <div class="col-span-6 sm:col-span-3">
            <label for="first_name" class="sr-only">First Name</label>

            <input
              id="first_name"
              type="text"
              name="first_name"
              autocomplete="given-name"
              placeholder="Enter your name"
              class="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="email_address" class="sr-only">Email Address</label>

            <input
              id="email_address"
              type="text"
              name="email_address"
              placeholder="Enter your email address"
              autocomplete="email"
              class="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="col-span-8 sm:col-span-2">
            <button
              type="button"
              class="w-full py-5 text-base font-medium leading-4 text-white rounded-md shadow-sm bg-primary-500 dark:bg-primary-400 text-centerr hover:bg-primary-600 dark:hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-roboto"
            >
              Notify Me
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/vectors/logo.svg?inline'
export default {
  components: {
    Logo,
  },
}
</script>
