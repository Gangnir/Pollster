<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <h2>{{ msg }}</h2>

    <div class="poll">
      <h1 v-bind:style="{ color: poll.color}">{{poll.title}}</h1>
      <div v-bind:style="{ color: poll.color}">{{poll.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Poll extends Vue {
  @Prop() private msg!: string;

  title: string;
  poll: object;

  constructor(){
    super();
    this.title = 'Welcome to Pollster';
    this.poll = {
                title: 'My First Poll',
                description: 'All kinds of poll yo!',
                color: '#42f44e',
                created: {
                    type: Date,
                    default: Date.now
                }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.about{
  color:red;
}
</style>
