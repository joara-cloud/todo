<template>
  <div>
    <header>
      <router-link to="/memo">memo</router-link>
      <router-link to="/todo">Todo</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
