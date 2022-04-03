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
          placeholder="Buscar actividad..."
          class="w-full bg-transparent border-0 rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <NuxtLink to="/actividades/nueva" class="p-2"
        ><span
          class="bg-blue-600 text-white text-xl opacity-100 hover:opacity-75 rounded-xl py-3 px-4 my-auto ml-1"
          ><i class="fas fa-tasks"></i></span
      ></NuxtLink>
    </div>

    <ItemTask v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script>
import ItemTask from "~/components/AtomicDesign/Molecules/ItemTask";
import TaskDataService from "~/services/TaskDataService";

export default {
  name: "Tasks",
  head: {
    title: "Actividades © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Actividades",
      },
    ],
  },
  components: {
    ItemTask,
  },
  data() {
    return {
      tasks: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        this.page++;

        const { count, data, error } = await TaskDataService.list(
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

        this.tasks = data;
        this.count = count;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    $route: ["getTasks"],
  },
};
</script>