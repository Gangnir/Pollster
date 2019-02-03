<template>
  <div class="result">
    <h1>Results of poll : 1</h1>
    <Result msg="Welcome to Your Vue.js + TypeScript App" about="All kinds of About"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Result from '@/components/Result.vue'; // @ is an alias to /src

@Component({
  components: {
    Result,
  },
})
export default class ResultClass extends Vue {}
</script>