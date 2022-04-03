<template>
  <div class="font-sans">
    <header class="container mx-auto bg-blue-800 text-white">
      <InternalBar
        :menu="menu"
        v-if="
          !isMenu &&
          $route.path !== '/' &&
          $route.path !== '/login' &&
          $route.path !== '/registro'
        "
      />
    </header>

    <main class="container mx-auto p-3">
      <h1>Editar perfil</h1>
    </main>
  </div>
</template>

<script>
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "EditProfile",
  head: {
    title: "Editar perfil © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Editar perfil",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      profile: "",
      menu: {
        link: `/perfil`,
        title: "Editar perfil",
      },
    };
  },
  created() {},
  methods: {},
  watch: {
    $route: [],
  },
};
</script>