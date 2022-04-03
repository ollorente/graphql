<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Nuevo</h1>
    </main>
  </div>
</template>

<script>
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "NewProject",
  head: {
    title: "Nuevo proyecto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Nuevo proyecto",
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
        link: `/proyectos`,
        title: "Nuevo proyecto",
      },
    };
  },
  methods: {},
};
</script>