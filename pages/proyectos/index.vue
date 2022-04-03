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
          placeholder="Buscar proyecto..."
          class="w-full bg-transparent border-0 rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <NuxtLink to="/proyectos/nuevo" class="p-2"
        ><span
          class="bg-blue-600 text-white text-xl opacity-100 hover:opacity-75 rounded-xl py-3 px-4 my-auto ml-1"
          ><i class="fas fa-user-tie"></i></span
      ></NuxtLink>
    </div>

    <ItemProject
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
import ItemProject from "~/components/AtomicDesign/Molecules/ItemProject";
import ProjectDataService from "~/services/ProjectDataService";

export default {
  name: "Projects",
  head: {
    title: "Proyectos © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Proyectos",
      },
    ],
  },
  components: {
    ItemProject,
  },
  data() {
    return {
      projects: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        this.page++;

        const { count, data, error } = await ProjectDataService.list(
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

        this.projects = data;
        this.count = count;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    $route: ["getProjects"],
  },
};
</script>