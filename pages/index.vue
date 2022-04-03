<template>
  <div class="w-full text-white flex overflow-y-auto m-5">
    <div class="w-full sm:w-2/3 m-auto">
      <img
        src="~/assets/img/logo.png"
        alt="Logo MeetingsApp"
        class="w-24 mx-auto my-5"
      />

      <div class="border-2 border-white rounded-md p-3">
        <h1 class="text-2xl font-normal text-center uppercase my-2">Login</h1>

        <form @submit.prevent="login" class="w-full">
          <div class="flex flex-col mb-3">
            <label
              for="email"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Correo electrónico *</label
            >
            <input
              type="text"
              id="email"
              v-model="user.email"
              placeholder="Correo electrónico *"
              class="bg-transparent border border-white rounded p-2"
              required
              autofocus
            />
          </div>

          <div class="flex flex-col mb-3">
            <label
              for="password"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Password *</label
            >
            <input
              type="password"
              id="password"
              v-model="user.password"
              placeholder="********"
              class="bg-transparent border border-white rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-white text-blue-800 text-center rounded py-2 px-3"
          >
            Entrar
          </button>
        </form>
      </div>

      <div class="mt-3">
        <p class="text-center p-2">
          <NuxtLink to="/registro" class="text-l font-semibold"
            >Registro</NuxtLink
          >
        </p>
        <p class="text-sm text-center opacity-75 p-2">
          {{ new Date().getFullYear() }} &copy; MeetingsApp
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  head: {
    title: "Login © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Login",
      },
    ],
  },
  layout: "auth",
  components: {},
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  created() {},
  methods: {
    async login() {
      console.log("login");
    },
  },
  watch: {
    $route: [],
  },
};
</script>