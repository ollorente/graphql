<template>
  <div class="">
    <header class="container mx-auto bg-blue-800 text-white sticky top-0">
      <InternalBar
        :menu="menu"
        v-if="!isMenu && $route.path !== '/' && $route.path !== '/registro'"
      />
    </header>

    <main class="container mx-auto p-3">
      <form @submit.prevent="updatePerson" class="w-full">
        <div class="flex flex-col mb-3">
          <label for="name" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Nombre completo</label
          >
          <input
            type="text"
            id="name"
            v-model="person.name"
            placeholder="Nombre completo *"
            class="bg-transparent border border-blue-800 rounded p-2"
            required
            autofocus
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="email" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Correo electrónico *</label
          >
          <input
            type="email"
            id="email"
            v-model="person.email"
            placeholder="Correo electrónico *"
            class="bg-transparent border border-blue-800 rounded p-2"
            required
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="phone" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Teléfono</label
          >
          <input
            type="text"
            id="phone"
            v-model="person.phone"
            placeholder="Teléfono"
            class="bg-transparent border border-blue-800 rounded p-2"
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="role" class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Role</label
          >
          <input
            type="text"
            id="role"
            v-model="person.role"
            placeholder="Role"
            class="bg-transparent border border-blue-800 rounded p-2"
            required
          />
        </div>

        <div class="flex flex-col mb-3">
          <label
            for="customFile"
            class="w-max bg-white p-2 ml-3 -mb-3 z-10 rounded"
            >Imagen</label
          >
          <input
            type="file"
            id="customFile"
            @change="changeImage"
            placeholder="Imagen"
            class="bg-transparent border border-blue-800 rounded p-2"
          />
        </div>

        <div class="flex flex-first align-center mb-3">
          <input
            type="checkbox"
            id="isActive"
            class="bg-blue-800 m-2"
            v-model="person.isActive"
          />
          <label for="isActive" class="">{{
            person.isActive ? "Activo" : "Inactivo"
          }}</label>
        </div>

        <div class="flex justify-between align-center mb-3">
          <div class="w-1/2 text-center p-3">
            <img
              :src="
                photo
                  ? photo
                  : 'https://res.cloudinary.com/dbszizqh4/image/upload/v1592198427/images_lvwix2.png'
              "
              :alt="person.name"
              class="w-16 h-16 border rounded-full object-cover mx-auto"
            />
          </div>
          <div class="w-1/2 text-center p-3">
            <figure class="figure" v-if="thumbnail">
              <img
                :src="imageSelected"
                class="w-16 h-16 border rounded-full object-cover mx-auto"
                alt="Imagen seleccionada"
              />
              <figcaption class="text-center my-3"></figcaption>
            </figure>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-yellow-400 text-gray-900 text-center rounded py-2 px-3"
        >
          Editar
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import PersonDataService from "~/services/PersonDataService";
import InternalBar from "~/components/AtomicDesign/Molecules/InternalBar";

export default {
  name: "Person",
  head: {
    title: "Editar contacto © MeetingsApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Editar contacto",
      },
    ],
  },
  layout: "internal",
  components: {
    InternalBar,
  },
  data() {
    return {
      person: {
        email: "",
        isActive: false,
        photoURL: "",
        phone: "",
        name: "",
        role: "",
      },
      thumbnail: "",
      photo: "",
      menu: {
        link: `/contactos/${this.$route.params.person}`,
        title: "Editar contacto",
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

          this.person = {
            isActive: data.isActive,
            name: data.name,
            email: data.email,
            role: data.role,
            phone: data.phone,
            photoURL: data.photoURL,
          };

          this.photo = data.photoURL;
        })
        .catch((error) => console.log(error));
    },
    async updatePerson() {
      let formData = new FormData();

      formData.append("isActive", this.person.isActive);
      formData.append("name", this.person.name);
      formData.append("email", this.person.email);
      formData.append("role", this.person.role);
      formData.append("phone", this.person.phone);
      formData.append("image", this.person.photoURL);

      await PersonDataService.update(this.$route.params.person, formData)
        .then(async (response) => {
          const { data, error } = await response.data;

          if (error) {
            console.log(error);
          }

          await this.$router.push(`/contactos/${data._id}/editar`);
        })
        .catch((error) => console.log(error));
    },
    async changeImage(e) {
      let file = e.target.files[0];
      this.person.photoURL = file;

      this.loadImage(file);
    },
    async loadImage(file) {
      let reader = new FileReader();

      reader.onload = (e) => {
        this.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
  computed: {
    imageSelected() {
      return this.thumbnail;
    },
  },
  watch: {
    $route: ["getPerson"],
  },
};
</script>