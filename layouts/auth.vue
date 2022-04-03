<template>
  <div class="font-sans font-light text-gray-900">
    <main class="w-screen h-screen bg-blue-800 px-3 flex">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "auth",
  components: {},
};
</script>

<style type="text/tailwindcss">
@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}

main {
  min-height: 100vh;
}
</style>