<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Nueva</h1>
    </main>
  </div>
</template>

<script>
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "NewTask",
  head: {
    title: "Nueva actividad © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nueva actividad",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      task: {},
      menu: {
        link: `/actividades`,
        title: "Nueva actividad",
      },
    };
  },
  methods: {},
};
</script>