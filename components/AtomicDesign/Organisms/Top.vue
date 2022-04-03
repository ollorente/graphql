<template>
  <header class="container mx-auto bg-blue-800 text-white sticky top-0">
    <MainBar
      v-if="
        isMenu ||
        $route.path === '/' ||
        $route.path === '/login' ||
        $route.path === '/registro'
      "
    />
    <Menu v-if="isMenu" class="" />
  </header>
</template>

<script>
import MainBar from "~/components/AtomicDesign/Molecules/MainBar";
import Menu from "~/components/AtomicDesign/Molecules/Menu";

export default {
  name: "Top",
  props: [],
  components: {
    MainBar,
    Menu,
  },
  data() {
    return {
      isMenu:
        this.$route.path === "/actividades" ||
        this.$route.path === "/proyectos" ||
        this.$route.path === "/encuentros" ||
        this.$route.path === "/contactos",
    };
  },
};
</script>