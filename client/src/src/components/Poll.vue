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
import axios from 'axios'
import VueAxios from 'vue-axios'

@Component
export default class Poll extends Vue {
  @Prop() private msg!: string;

  title: string;
  poll: object;
  test: object;

  apiPath: string = 'http://localhost:3000';

  info: any;

  constructor(){
    super();
    this.title = 'Welcome to Pollster';
    // this.apiPath = 'http://localhost:3000';
    this.poll = {
                title: 'My First Poll',
                description: 'All kinds of poll yo!',
                color: '#42f44e',
                created: {
                    type: Date,
                    default: Date.now
                }
    };
    this.postPoll();
    this.test = this.getPoll;
  }

  public postPoll(){
    console.log(this.apiPath);
    axios.post('http://localhost:3000/poll', {
      title: "The ultimate question",
      description: "Oh man, this is a tough one",
      color: "pink",
      statements: [{
          text: "What is the answer to the ultimate question of life, the universe and everything?",
          type: "single-select",
          options: [{
              text: "41"
          }, {
              text: "42"
          }, {
              text: "43"
          }]
      }]
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });   
  }

  public getPoll(){
    axios.get('http://localhost:3000/getPoll')
    .then(response => (this.info = response))
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
