<template>
<div class="getHelpToolbarWrapper">
  <h2>Enter Your Question:</h2>
  <input id="questionEnterText" type="text" class="questionEnterText" v-model="question">
  <div class="getHelpButtonHolder">
    <h2 class="getHelpButton" @click="updateMeOnQueue()" v-bind:class="{inQueue: computeInQueue}">{{buttonText}}</h2>
  </div>
  <p class="questionsRemaining">You have {{questionsRemaining}} questions left today</p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GetHelpToolbar',
  computed: {
    computeInQueue() {
      let queue = this.$root.$data.queue;
      if (queue === null) return false; //If it hasn't loaded yet
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].id === this.$root.$data.myID) {
          this.setNotInQueue();
          return true;
        }
      }
      this.setInQueue();
      return false;
    }
  },
  props: {
    questionsRemaining: Number
  },
  data() {
    return {
      question: '',
      buttonText: 'Get Help'
    }
  },
  methods: {
    setNotInQueue() {
      this.question = '';
      this.buttonText = 'Leave Queue';
      this.$root.$data.inQueue = true;
      if (document.getElementById("questionEnterText") !== null) {
        document.getElementById("questionEnterText").disabled = true;
      }
    },
    setInQueue() {
      this.buttonText = 'Get Help';
      this.$root.$data.inQueue = false;
      if (document.getElementById("questionEnterText") !== null) {
        document.getElementById("questionEnterText").disabled = false;
      }
    },
    async joinQueue() {
      try {
        await axios.put("/api/session/create.php/", {
          id: this.$root.$data.myID,
          name: this.$root.$data.myName,
          ta: null,
          question: this.question,
          location: "Test" //TODO set to actual location
        });
      } catch (error) {
        console.log(error);
      }
    },
    async leaveQueue() {
      try {
        let testID = this.$root.$data.myID;
        await axios.delete('/api/session/leave.php/' + testID, {
          id: this.$root.$data.myID,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updateMeOnQueue() {
      if (!this.$root.$data.inQueue) {
        this.joinQueue();
      } else {
        this.leaveQueue();
      }
      location.reload(); //Reloads the page
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
