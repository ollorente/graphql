<template>
  <nav class="flex justify-between align-center text-white p-3">
    <div class="text-2xl font-light">
      <NuxtLink :to="menu.link">
        <i class="fas fa-arrow-left"></i> {{ menu.title }}
      </NuxtLink>
    </div>
    <div class="text-l font-light">
      <div v-if="$route.path !== '/' && $route.path !== '/registro'">
        <div
          class="w-screen h-screen bg-transparent text-black fixed inset-0 z-50"
          v-if="isMenu"
          @click="isChange"
        >
          <div
            class="w-4/5 max-w-xs mt-4 mx-auto mr-4 bg-white rounded shadow-xl"
          >
            <div class="py-2 px-3">
              <button
                @click="isChange"
                class="w-full flex justify-between align-center font-semibold"
              >
                <span class="py-1">Menú</span>
                <span class="py-1 px-2"><i class="fas fa-ellipsis-v"></i></span>
              </button>
            </div>
            <NuxtLink to="/perfil" class="w-full">
              <div class="hover:bg-gray-100 py-1 px-3">Perfil</div>
            </NuxtLink>
            <NuxtLink to="/perfil/editar" class="w-full">
              <div class="hover:bg-gray-100 py-1 px-3">Editar perfil</div>
            </NuxtLink>
            <NuxtLink to="/perfil/cambiar-password" class="w-full">
              <div class="hover:bg-gray-100 py-1 px-3">Cambiar password</div>
            </NuxtLink>
            <div class="border-t mt-2">
              <button
                @click="logOut"
                class="w-full text-left font-light hover:bg-gray-100 py-2 px-3"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
        <button @click="isChange" class="py-1 px-3">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "InternalBar",
  props: ["menu"],
  data() {
    return {
      isMenu: false,
    };
  },
  methods: {
    async isChange() {
      this.isMenu = !this.isMenu;
    },
    async logOut() {
      console.log("Saliendo");
    },
  },
};
</script>