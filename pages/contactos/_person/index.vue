<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <div
        :class="
          person.isActive === true && person.isLock === false
            ? 'opacity-100'
            : 'opacity-30'
        "
      >
        <p class="text-center p-3">
          <img
            :src="
              person.photoURL
                ? person.photoURL
                : 'https://res.cloudinary.com/dbszizqh4/image/upload/v1592198427/images_lvwix2.png'
            "
            class="w-48 h-48 object-cover position-center border rounded-full mx-auto"
            :alt="person.name"
          />
        </p>
        <h1 class="text-2xl text-center font-normal">
          {{ person.name ? person.name : person.email }}
        </h1>
        <h3 class="text-center mb-5" v-if="person.role">
          {{ person.role }}
        </h3>
        <p class="py-3" v-if="person.email">
          <span class="font-semibold">Correo electrónico:</span><br />
          <span class="text-l">{{ person.email }}</span>
        </p>
        <p class="py-3" v-if="person.phone">
          <span class="font-semibold">Teléfono:</span><br />
          <span class="text-l">{{ person.phone }}</span>
        </p>
        <p class="py-3">
          <span class="font-semibold">Creado:</span><br />
          <span class="text-l">{{
            $moment(person.createdAt).format("LL")
          }}</span>
        </p>
        <p class="py-3" v-if="person.createdAt !== person.updatedAt">
          <span class="font-semibold">Actualizado:</span><br />
          <span class="text-l">{{
            $moment(person.updatedAt).format("LL")
          }}</span>
        </p>
        <p class="py-3">
          <NuxtLink
            :to="`/contactos/${$route.params.person}/proyectos`"
            class=""
          >
            <div
              class="w-full bg-white hover:bg-gray-100 text-blue-400 font-semibold border-2 border-blue-400 rounded py-2 px-3 my-2"
            >
              <b>{{ person._projectsCount }}</b>
              {{ person._projectsCount === 1 ? "Proyecto" : "Proyectos" }}
            </div>
          </NuxtLink>
          <NuxtLink
            :to="`/contactos/${$route.params.person}/encuentros`"
            class=""
          >
            <div
              class="w-full bg-white hover:bg-gray-100 text-blue-400 font-semibold border-2 border-blue-400 rounded py-2 px-3 my-2"
            >
              <b>{{ person._meetingsCount }}</b>
              {{ person._meetingsCount === 1 ? "Encuentro" : "Encuentros" }}
            </div>
          </NuxtLink>
          <NuxtLink
            :to="`/contactos/${$route.params.person}/actividades`"
            class=""
          >
            <div
              class="w-full bg-white hover:bg-gray-100 text-blue-400 font-semibold border-2 border-blue-400 rounded py-2 px-3 my-2"
            >
              <b>{{ person._tasksCount }}</b>
              {{ person._tasksCount === 1 ? "Actividad" : "Actividades" }}
            </div>
          </NuxtLink>
        </p>
        <p class="py-3">
          <span class="text-l"
            ><i
              :class="
                person.isActive
                  ? 'fas fa-circle text-blue-800'
                  : 'far fa-circle text-gray-300'
              "
            ></i>
            Activo</span
          ><br />
          <span class="text-l"
            ><i
              :class="
                person.isLock
                  ? 'far fa-circle text-gray-300'
                  : 'fas fa-circle text-blue-800'
              "
            ></i>
            Público</span
          >
        </p>
        <div class="flex flex-row align-center py-3">
          <button
            class="w-1/2 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-600 border-2 border-gray-400 rounded p-3 mx-1"
            @click="remove"
          >
            <i class="fas fa-trash"></i>
          </button>
          <button
            class="w-1/2 bg-yellow-400 hover:bg-yellow-600 text-gray-900 hover:text-white border-2 border-yellow-300 hover:border-yellow-600 rounded p-3 mx-1"
            @click="goToUpdate"
          >
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      person: "",
      menu: {
        link: `/contactos`,
        title: "Contacto",
      },
    };
  },
  created() {
    this.getPerson();
  },
  methods: {
    async getPerson() {
      await PersonDataService.get(this.$route.params.person)
        .then(async (response) => {
          const { data, error } = await response.data;

          if (error) {
            console.log(error);
          }

          this.person = data;
        })
        .catch((error) => console.log(error));
    },
    async goToUpdate() {
      await this.$router.push(`/contactos/${this.$route.params.person}/editar`);
    },
    async remove() {
      if (window.confirm(`Está a punto de borrar un elemento`)) {
        await PersonDataService.remove(this.$route.params.person)
          .then(async (response) => {
            const { data, error } = await response.data;

            if (error) {
              console.log(error);
            }

            if (data) {
              await this.$router.push(`/contactos`);
            }
          })
          .catch((error) => console.log(error));
      }
    },
  },
  watch: {
    $route: ["getPerson"],
  },
};
</script>