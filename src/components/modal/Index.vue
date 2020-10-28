<template>
  <div class="modal-wrapper">
      <i class="t-icon t-close" @click="hanledclose"></i>

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
  },
  methods:{
      hanledclose(){
          (window as any).Store.set('tryCode',false)
      }
  }
});
</script>
<style lang="scss" scoped>
    .modal-wrapper{
        position: relative;
        height: 100%;
        .t-close{
            position: absolute;
            cursor: pointer;
        }
    }

</style>
