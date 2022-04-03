<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <form @submit.prevent="addPerson" class="w-full">
        <div class="flex flex-col mb-3">
          <label for="name" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Nombre completo</label
          >
          <input
            type="text"
            id="name"
            v-model="person.name"
            placeholder="Nombre completo *"
            class="bg-transparent border border-blue-800 rounded p-2"
            autofocus
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="email" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Correo electrónico *</label
          >
          <input
            type="email"
            id="email"
            v-model="person.email"
            placeholder="Correo electrónico *"
            class="bg-transparent border border-blue-800 rounded p-2"
            required
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="role" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Role</label
          >
          <input
            type="text"
            id="role"
            v-model="person.role"
            placeholder="Role"
            class="bg-transparent border border-blue-800 rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-800 text-white text-center rounded py-2 px-3"
        >
          Crear
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Nuevo contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nuevo contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      person: {
        name: null,
        email: null,
        role: null,
      },
      menu: {
        link: `/contactos`,
        title: "Nuevo contacto",
      },
    };
  },
  methods: {
    async addPerson() {
      try {
        if (this.person.email === null || this.person.name === null) {
          return;
        }

        await PersonDataService.create(this.person)
          .then(async (response) => {
            const { data, error } = await response.data;

            if (error) {
              console.log(error);
            }

            await this.$router.push(`/contactos/${data._id}`);
          })
          .catch((error) => console.log(error));
      } catch (error) {}
    },
  },
};
</script>