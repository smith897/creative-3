<template>
<div class="getHelpToolbarWrapper">
  <h2>Enter Your Question:</h2>
  <input id="questionEnterText" type="text" class="questionEnterText" v-model="question">
  <div class="getHelpButtonHolder">
    <h2 class="getHelpButton" @click="updateMeOnQueue()" v-bind:class="{inQueue: getInQueue}">{{buttonText}}</h2>
  </div>
  <p class="questionsRemaining">You have {{questionsRemaining}} questions left today</p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GetHelpToolbar',
  props: {
    questionsRemaining: Number
  },
  data() {
    return {
      question: '',
      buttonText: 'Get Help'
    }
  },
  computed: {
    getInQueue() {
      return this.$root.$data.inQueue;
    }
  },
  methods: {
    async updateMeOnQueue() {
      if (!this.$root.$data.inQueue) {
        //FIXME working on
        try {
          await axios.put("/session/create.php/", {
            id: this.$root.$data.myID,
            name: this.$root.$data.myName,
            ta: null,
            question: this.question,
            location: "Test" //TODO set to actual location
          });
          //FIXME update the queue here
          this.$forceUpdate(); //FIXME testing, will this work?
        } catch (error) {
          console.log(error);
        }
        this.question = '';
        this.buttonText = 'Leave Queue'
        this.$root.$data.inQueue = true;
        document.getElementById("questionEnterText").disabled = true;
      } else {
        try {
          await axios.delete('/session/leave.php', {
            id: this.$root.$data.myID, //FIXME the findByIdAndRemove doesn't work, wrong kind of ID being passed in?
          });
        } catch (error) {
          console.log(error);
        }
        this.buttonText = 'Get Help'
        this.$root.$data.inQueue = false;
        document.getElementById("questionEnterText").disabled = false;
      }
      //FIXME update the queue here
      this.$forceUpdate(); //FIXME doesn't work
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.getHelpToolbarWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.questionsRemaining {
  margin: 0.25em 0em 1em 0em;
}

.questionEnterText {
  width: 75%;
  font-size: 2em;
  margin-bottom: 1em;
  margin-top: 0.5em;
}

.getHelpButton {
  background-color: #FF3B3F;
  color: #EFEFEF;
  padding: 0.5em 1em 0.5em 1em;
  margin-bottom: 1em;
  border-width: thin;
  border-style: solid;
  border-color: black;
}

.inQueue {
  background-color: #A9A9A9;
}
</style>
