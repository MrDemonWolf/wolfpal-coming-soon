<template>
  <div class="flex items-center justify-center">
    <div class="p-2">
      <div class="text-center">
        <Logo class="inline-block w-auto h-32" />
      </div>

      <div v-if="!subscribed">
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
        <form
          class="w-full mx-auto mt-6 md:w-2/3"
          novalidate
          @submit.prevent="userSubscribe"
        >
          <div class="grid grid-cols-8 gap-3">
            <div class="col-span-8 sm:col-span-3">
              <label for="first_name" class="sr-only">First Name</label>

              <input
                id="first_name"
                v-model="subscribe.name"
                type="text"
                name="first_name"
                placeholder="Enter your name"
                autocomplete="given-name"
                :class="{
                  'border-red-500':
                    subscribe.messages.errors.name || subscribe.messages.error,
                }"
                class="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
              <span
                v-if="subscribe.messages.errors.name"
                class="text-red-500"
                >{{ subscribe.messages.errors.name }}</span
              >
            </div>

            <div class="col-span-8 sm:col-span-3">
              <label for="email_address" class="sr-only">Email Address</label>

              <input
                id="email_address"
                v-model="subscribe.email"
                type="text"
                name="email_address"
                placeholder="Enter your email address"
                autocomplete="email"
                :class="{
                  'border-red-500':
                    subscribe.messages.errors.email || subscribe.messages.error,
                }"
                class="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
              <span
                v-if="subscribe.messages.errors.email"
                class="text-red-500"
                >{{ subscribe.messages.errors.email }}</span
              >
            </div>
            <div class="col-span-8 sm:col-span-2">
              <button
                type="submit"
                class="w-full py-5 text-base font-medium leading-4 text-white rounded-md shadow-sm bg-primary-500 dark:bg-primary-400 text-centerr hover:bg-primary-600 dark:hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-roboto"
              >
                <span v-if="!isLoading">Notify Me</span>
                <span v-else>
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-3 h-3 mr-2 text-white -animate-delay-1 animate-bounce"
                  />
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-3 h-3 mr-2 text-white -animate-delay-2 animate-bounce"
                  />
                  <fa
                    :icon="['fas', 'circle']"
                    class="inline-block w-3 h-3 mr-2 text-white animate-bounce"
                  />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="pt-4">
        <h2
          class="text-5xl font-bold text-center text-primary-500 dark:text-primary-300 font-roboto"
        >
          Thanks for subscribing
        </h2>
        <p
          class="text-xl font-bold text-center text-primary-500 dark:text-primary-300 font-montserrat"
        >
          You will be notifted when it launch.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/vectors/logo.svg?inline'
export default {
  components: {
    Logo,
  },
  data() {
    return {
      isLoading: false,
      subscribed: false,
      subscribe: {
        email: '',
        name: '',
        messages: {
          error: null,
          errors: {
            email: null,
            name: null,
          },
        },
      },
    }
  },
  methods: {
    async userSubscribe() {
      try {
        this.subscribe.messages = {
          error: null,
          errors: {
            email: null,
            name: null,
          },
        }
        this.isLoading = true

        await this.$axios.$post('/api/subscribe', {
          email: this.subscribe.email,
          name: this.subscribe.name,
        })

        this.isLoading = false
        this.subscribed = true
      } catch (e) {
        this.subscribe.messages = {
          error: null,
          errors: {
            email: null,
            name: null,
          },
        }
        this.isLoading = false

        if (e.response.data.codes) {
          if (e.response.data.codes.name) {
            switch (e.response.data.codes.name) {
              case 'REQUIRED':
                this.subscribe.messages.errors.name = 'Name is required'
                break
              default:
                this.$toast.error('Oops.. Something Went Wrong..', {
                  position: 'bottom-right',
                })
                break
            }
          }

          if (e.response.data.codes.email) {
            switch (e.response.data.codes.email) {
              case 'REQUIRED':
                this.subscribe.messages.errors.email = 'Email is required'
                break

              default:
                this.$toast.error('Oops.. Something Went Wrong..', {
                  position: 'bottom-right',
                })
                break
            }
          }
        } else if (e.response.data.code) {
          switch (e.response.data.code) {
            case 'ALREADY_EXISTS':
              this.$toast.info(
                'Your already subscribed to get updates on WolfPal',
                {
                  position: 'bottom-right',
                }
              )
              break

            default:
              this.$toast.error('Oops.. Something Went Wrong..', {
                position: 'bottom-right',
              })
              break
          }
        } else {
          this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
      }
    },
  },
}
</script>
