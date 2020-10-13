<template>
  <div class="header">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/guide">Guide</router-link> |
      <router-link to="/support">Support us</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {}
});
</script>

<style lang="scss" scoped></style>
