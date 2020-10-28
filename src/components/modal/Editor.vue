<template>
  <div class="editor">
    <MonacoEditor
    height="600"
    language="typescript"
    :code="code"
    :editorOptions="options"
    @mounted="onMounted"
    @codeChange="onCodeChange"
    >
</MonacoEditor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MonacoEditor from 'vue-monaco-editor'

export default defineComponent({
  name: 'Editor',
  components: {
    MonacoEditor
  },
  data():{
    options:object,
    code:string,
    editor:object
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
      editor:{}
    }
  },
  methods: {
    onMounted(editor:object) {
      this.editor = editor;
    },
    onCodeChange(editor:object) {
      console.log((editor as any).getValue());
      (window as any).Store.set('t-data',(editor as any).getValue())
    }
  },
});
</script>
<style lang="scss" scoped>
.editor{
    height: 57%;
    overflow: auto;
    border-bottom: 1px solid #eeeeee;;
}

</style>
