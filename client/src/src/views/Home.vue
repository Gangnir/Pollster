<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Poll msg="Pollination" about="All kinds of About"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Poll from '@/components/Poll.vue'; // @ is an alias to /src

@Component({
  components: {
    Poll,
  },
})
export default class Home extends Vue {}
</script>
