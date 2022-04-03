<template>
  <nav class="flex justify-between align-center">
    <NuxtLink
      to="/actividades"
      class="w-1/4 text-2xl text-white text-center border-b-8 p-3"
      :class="
        $route.path === '/actividades'
          ? 'border-yellow-400 opacity-100'
          : 'border-blue-800 opacity-60'
      "
      ><i class="fas fa-tasks"></i
    ></NuxtLink>
    <NuxtLink
      to="/proyectos"
      class="w-1/4 text-2xl text-white text-center border-b-8 p-3"
      :class="
        $route.path === '/proyectos'
          ? 'border-yellow-400 opacity-100'
          : 'border-blue-800 opacity-60'
      "
      ><i class="fas fa-user-tie"></i
    ></NuxtLink>
    <NuxtLink
      to="/encuentros"
      class="w-1/4 text-2xl text-white text-center border-b-8 p-3"
      :class="
        $route.path === '/encuentros'
          ? 'border-yellow-400 opacity-100'
          : 'border-blue-800 opacity-60'
      "
      ><i class="fas fa-handshake"></i
    ></NuxtLink>
    <NuxtLink
      to="/contactos"
      class="w-1/4 text-2xl text-white text-center border-b-8 p-3"
      :class="
        $route.path === '/contactos'
          ? 'border-yellow-400 opacity-100'
          : 'border-blue-800 opacity-60'
      "
      ><i class="fas fa-users"></i
    ></NuxtLink>
  </nav>
</template>