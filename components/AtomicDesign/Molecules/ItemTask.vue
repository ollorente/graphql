<template>
  <div>
    <NuxtLink
      :to="`/actividades/${task._id}`"
      class="w-full"
      :class="
        task.isActive === true && task.isLock === false
          ? 'opacity-100'
          : 'opacity-30'
      "
    >
      <div class="w-full bg-transparent hover:bg-gray-50 flex border-b p-3">
        <i
          class="fas fa-clipboard-check text-4xl text-yellow-400 my-1 mr-2"
        ></i>

        <div class="w-full flex justify-between align-start">
          <div class="w-full p-1">
            <h2 class="font-semibold">{{ task.name }}</h2>
            <p class="font-light">{{ task.project.name }}</p>
          </div>
          <div class="p-1">
            <i
              :class="
                task.isActive
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
  name: "ItemTask",
  props: ["task"],
  components: {},
};
</script>