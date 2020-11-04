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
import {Node} from '@topology/core';

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
            color: #000;
            z-index: 10;
            left: 4px;
            font-size: 14px;
            top: 4px;
            position: absolute;
            cursor: pointer;
        }
    }

</style>
