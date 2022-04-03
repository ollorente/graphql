<template>
  <div>
    <div class="w-full flex flex-row align-center mb-3">
      <form
        @submit.prevent="searchQuery"
        class="w-full flex border-2 border-blue-400 rounded-xl"
      >
        <input
          type="search"
          name="search"
          id="search"
          v-model="search"
          placeholder="Buscar contacto..."
          class="w-full bg-transparent border-0 rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <NuxtLink to="/contactos/nuevo" class="p-2"
        ><span
          class="bg-blue-600 text-white text-xl opacity-100 hover:opacity-75 rounded-xl py-3 px-4 my-auto ml-1"
          ><i class="fas fa-users"></i></span
      ></NuxtLink>
    </div>

    <ItemUser v-for="(user, index) in people" :key="index" :user="user" />
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import ItemUser from "~/components/AtomicDesign/Molecules/ItemUser";

export default {
  name: "People",
  head: {
    title: "Contactos © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contactos",
      },
    ],
  },
  components: {
    ItemUser,
  },
  data() {
    return {
      people: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
    };
  },
  created() {
    this.getPeople();
  },
  methods: {
    async getPeople() {
      try {
        this.page++;

        // const { count, data, error } = await this.getData();
        const { count, data, error } = await PersonDataService.list(
          this.limit,
          this.page
        )
          .then(async (response) => {
            return await response.data;
          })
          .catch((error) => console.log(error));

        if (error) {
          console.log(error);
        }

        this.count = count;
        this.people = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getData() {
      this.page++;

      await PersonDataService.list(this.limit, this.page)
        .then(async (response) => {
          return await response.data;
        })
        .catch((error) => console.log(error));
    },
    async searchQuery() {
      console.log("Buscar...");
      this.search = null;
    },
  },
  watch: {
    $route: ["getPeople"],
  },
};
</script>