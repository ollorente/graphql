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
          placeholder="Buscar encuentro..."
          class="w-full bg-transparent border-0 rounded-l-xl p-3"
        />
        <button type="submit" class="p-3"><i class="fas fa-search"></i></button>
      </form>

      <NuxtLink to="/encuentros/nuevo" class="p-2"
        ><span
          class="bg-blue-600 text-white text-xl opacity-100 hover:opacity-75 rounded-xl py-3 px-4 my-auto ml-1"
          ><i class="fas fa-handshake"></i></span
      ></NuxtLink>
    </div>

    <ItemMeeting
      v-for="(meeting, index) in meetings"
      :key="index"
      :meeting="meeting"
    />
  </div>
</template>

<script>
import ItemMeeting from "~/components/AtomicDesign/Molecules/ItemMeeting";
import MeetingDataService from "~/services/MeetingDataService";

export default {
  name: "Meetings",
  head: {
    title: "Encuentros © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Encuentros",
      },
    ],
  },
  components: {
    ItemMeeting,
  },
  data() {
    return {
      meetings: [],
      count: 0,
      limit: 10,
      page: 0,
      search: null,
    };
  },
  created() {
    this.getMeetings();
  },
  methods: {
    async getMeetings() {
      try {
        this.page++;

        const { count, data, error } = await MeetingDataService.list(
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

        this.meetings = data;
        this.count = count;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    $route: ["getMeetings"],
  },
};
</script>