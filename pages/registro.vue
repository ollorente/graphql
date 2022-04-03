<template>
  <div class="w-full text-white flex overflow-y-auto m-5">
    <div class="w-full sm:w-2/3 m-auto">
      <img
        src="~/assets/img/logo.png"
        alt="Logo MeetingsApp"
        class="w-24 mx-auto my-5"
      />

      <div class="border-2 border-white rounded-md p-3">
        <h1 class="text-2xl font-normal text-center uppercase my-2">
          Registro
        </h1>

        <form @submit.prevent="logup" class="w-full">
          <div class="flex flex-col mb-3">
            <label
              for="name"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Nombre completo</label
            >
            <input
              type="text"
              id="name"
              v-model="user.name"
              placeholder="Nombre completo"
              class="bg-transparent border border-white rounded p-2"
              autofocus
            />
          </div>

          <div class="flex flex-col mb-3">
            <label
              for="username"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Usuario *</label
            >
            <input
              type="text"
              id="username"
              v-model="user.username"
              placeholder="Usuario *"
              class="bg-transparent border border-white rounded p-2"
              required
            />
          </div>

          <div class="flex flex-col mb-3">
            <label
              for="email"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Correo electrónico *</label
            >
            <input
              type="email"
              id="email"
              v-model="user.email"
              placeholder="Correo electrónico *"
              class="bg-transparent border border-white rounded p-2"
              required
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

          <div class="flex flex-col mb-3">
            <label
              for="password_confirm"
              class="w-max bg-blue-800 p-2 ml-3 -mb-3 z-10 rounded"
              >Confirmar password *</label
            >
            <input
              type="password"
              id="password_confirm"
              v-model="user.password_confirm"
              placeholder="********"
              class="bg-transparent border border-white rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-white text-blue-800 text-center rounded py-2 px-3"
          >
            Crear
          </button>
        </form>
      </div>

      <div class="mt-3">
        <p class="text-center p-2">
          <NuxtLink to="/" class="text-l font-semibold">Login</NuxtLink>
        </p>
        <p class="text-sm text-center opacity-75 p-2">
          {{ new Date().getFullYear() }} &copy; MeetingsApp
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "~/services/UserDataService";

export default {
  name: "Logup",
  head: {
    title: "Registro © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Registro",
      },
    ],
  },
  layout: "auth",
  components: {},
  data() {
    return {
      user: {
        email: null,
        name: null,
        password: null,
        password_confirm: null,
        username: null,
      },
    };
  },
  created() {},
  methods: {
    async logup() {
      try {
        if (
          this.user.email === null ||
          this.user.password === null ||
          this.user.password_confirm === null ||
          this.user.username === null
        ) {
          return;
        }

        if (this.user.password !== this.user.password_confirm) {
          return;
        }

        await UserDataService.create(this.user)
          .then(async (response) => {
            // const { data, error } = await response;
            console.log(response);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    $route: [],
  },
};
</script>