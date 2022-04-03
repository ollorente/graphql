<template>
  <div>
    <NuxtLink
      :to="`/proyectos/${project._id}`"
      class="w-full"
      :class="
        project.isActive === true && project.isLock === false
          ? 'opacity-100'
          : 'opacity-30'
      "
    >
      <div class="w-full bg-transparent hover:bg-gray-50 flex border-b p-3">
        <i class="fas fa-user-tie text-4xl text-yellow-400 my-1 mr-2"></i>

        <div class="w-full flex justify-between align-start">
          <div class="w-full p-1">
            <h2 class="font-semibold">{{ project.name }}</h2>
            <p class="font-light">
              <b>{{ project._tasksCount }}</b>
              {{ project._tasksCount === 1 ? "Actividad" : "Actividades" }}
            </p>
          </div>
          <div class="p-1">
            <i
              :class="
                project.isActive
                  ? 'fas fa-circle text-blue-800'
                  : 'far fa-circle text-gray-300'
              "
            ></i>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ItemProject",
  props: ["project"],
  components: {},
};
</script>