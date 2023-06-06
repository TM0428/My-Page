<template>
    <client-only>
      <CodeEditor :value="code" :languages="lang" :line-nums="true" :tab-spaces="4" :read-only="!editable">
      </CodeEditor>
      <slot></slot>
    </client-only>
  </template>


<script>
import hljs from 'highlight.js';
import CodeEditor from "simple-code-editor";
export default {
  components: {
    CodeEditor,
  },
  props: {
    code: {
      type: String,
      default: ",[.,]"
    },
    editable: {
      type: Boolean,
      default: false
    },
    lang: {
      default: [['brainfuck', 'brainfuck']]
    }
  },
  mounted: function(){
    console.log(this.$slots);
    // this.code = this.$slots.default[0].text;
  },
};
</script>