<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <form
        @submit.prevent="searchQuery"
        class="flex border-2 border-blue-400 rounded-xl mb-5"
      >
        <input
          type="search"
          name="search"
          id="search"
          v-model="search"
          placeholder="Buscar encuentro..."
          class="w-full bg-transparent rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <h1>Encuentros contacto {{ $route.params.person }}</h1>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "PersonProjects",
  head: {
    title: "Encuentros contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Encuentros contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      meetings: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
      menu: {
        link: `/contactos/${this.$route.params.person}`,
        title: "Encuentros contacto",
      },
    };
  },
  created() {
    this.getPersonMeetings();
  },
  methods: {
    async getPersonMeetings() {
      await PersonDataService.meetings(
        this.$route.params.person,
        this.limit,
        this.page
      )
        .then(async (response) => {
          const { data, error } = await response.data;

          if (error) {
            console.log(error);
          }

          this.meetings = data;
        })
        .catch((error) => console.log(error));
    },
  },
  watch: {
    $route: ["getPersonMeetings"],
  },
};
</script>