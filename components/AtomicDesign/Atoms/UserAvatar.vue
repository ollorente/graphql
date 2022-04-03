<template>
  <img
    :src="
      user.photoURL
        ? user.photoURL
        : `https://res.cloudinary.com/dbszizqh4/image/upload/v1592198427/images_lvwix2.png`
    "
    :alt="user.name ? user.name : user.username"
    class="w-12 h-12 rounded-full object-cover border my-1 mr-2"
  />
</template>

<script>
export default {
  name: "UserAvatar",
  props: ["user"],
};
</script>