<template>
  <div class="Modal">
    <Teditor />
    <Tcanvas /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tcanvas from './Canvas'
import Teditor from './Editor'
export default defineComponent({
  name: 'Modal',
  components: {
      Tcanvas,
      Teditor
  }
});
</script>
<style lang="scss" scoped></style>
