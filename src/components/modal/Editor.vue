<template>
  <div class="editor">
    <MonacoEditor
    height="100%"
    language="typescript"
    :code="code"
    :editorOptions="options"
    :key="randomKey"
    @mounted="onMounted"
    @codeChange="onCodeChange"
    >
</MonacoEditor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MonacoEditor from 'vue-monaco-editor'
import {Debounced} from '@/utils/utils.ts'

export default defineComponent({
  name: 'Editor',
  components: {
    MonacoEditor
  },
  data():{
    options:object,
    code:string,
    editor:object,
    randomKey:number
  } {
    return {
      code: '',
      options: {
          theme: "vs-dark",
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          automaticLayout: true,
          glyphMargin: true,
          showFoldingControls: "always",
          formatOnPaste: true,
          formatOnType: true,
          folding: true,
      },
      editor:{},
      randomKey: Math.random()
    }
  },
  methods: {
    onMounted(editor:object) {
      this.editor = editor;
      console.log((this.editor as any))

    },
    startThrottle:new Debounced().use((editor:object)=>{
      console.log(8888,(editor as any).getValue());
      (window as any).Store.set('t-data',(editor as any).getValue())
    },1000,false),
    onCodeChange(editor:object) {
      this.startThrottle(editor)
    
    }
  },
  mounted() {
    const tryCode = (window as any).Store.subscribe('updateCode',(value:any) => {
        console.log(value,'11update');
        this.code = value;
        (window as any).Store.set('t-data',value);
        this.randomKey = Math.random();
    });
  },
});
</script>
<style lang="scss" scoped>
.editor{
    height: 57%;
    border-bottom: 1px solid #eeeeee;
}

</style>
<style>
.editor .monaco-editor.vs-dark .monaco-editor-background,
.editor .monaco-editor.vs-dark .glyph-margin{
    background: #f8f8f8;
  }
  .editor .monaco-editor.vs-dark .scroll-decoration{
    box-shadow: none;
  }
  /* .editor .monaco-editor.vs-dark .token {
    color: #000;
  } */
  .monaco-editor.vs-dark .token.keyword, 
  .monaco-editor.vs-dark .token.keyword.control{
    color:  #008dff;
  }
  .editor .monaco-editor.vs-dark .token.delimiter{
    color: #999;
  }
  .editor .monaco-editor.vs-dark .token.token.number{
    color: #008dff;
  }

  .editor .monaco-editor.vs-dark .token.token.string{
    color: #0b8235;
  }
  .editor .monaco-editor{
    width: 100%!important;
  }
 
 .editor .monaco-editor .overflow-guard{
    width: 100%!important;
  }
  

</style>
