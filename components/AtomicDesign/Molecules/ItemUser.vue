<template>
  <NuxtLink
    :to="`/contactos/${user._id}`"
    class="w-full"
    :class="
      user.isActive === true && user.isLock === false
        ? 'opacity-100'
        : 'opacity-30'
    "
  >
    <div class="w-full bg-transparent hover:bg-gray-50 flex border-b p-3">
      <UserAvatar :user="user" />

      <div class="w-full flex justify-between align-start">
        <div class="w-full p-1">
          <h2 class="font-semibold">{{ user.name }}</h2>
          <p class="font-light">{{ user.email }}</p>
        </div>
        <div class="p-1">
          <i
            :class="
              user.isActive
                ? 'fas fa-circle text-blue-800'
                : 'far fa-circle text-gray-300'
            "
          ></i>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import UserAvatar from "~/components/AtomicDesign/Atoms/UserAvatar";

export default {
  name: "ItemUser",
  props: ["user"],
  components: {
    UserAvatar,
  },
};
</script>