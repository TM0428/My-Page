<template>
    <div>
        <h1>BfInterpreter</h1>
        <div>
            ソースコード
        </div>
        <CodeEditor :languages='[["brainfuck", "brainfuck"]]' v-model='code'  v-bind:editable="true" :line-nums="true"></CodeEditor>
        <div>
            入力
        </div>
        <CodeEditor :languages='[["plaintext", "text"]]' v-model='input'  v-bind:editable="true" :line-nums="true"></CodeEditor>
        <button v-on:click="bfInterpreter">実行</button>
    </div>
</template>

<script>
import CodeEditor from "simple-code-editor";
import { hoge } from "../js/test" 

export default {
  components: {
    CodeEditor
  },
  data() {
    return {
      code: ",.",
      input: "a",
      eof: -1
    }
  },
  methods: {
    bfInterpreter(){
      let d = {
        command: 'start',
        mode: 'simple',
        source: this.code,
        eof: this.eof,
        input: this.input,
        interval: 10
      };
      hoge();
      /*
      this.worker = new Worker(SimplBFDebbuger);
      this.worker.postMessage(d);
      */
    }
  },
}

</script>
