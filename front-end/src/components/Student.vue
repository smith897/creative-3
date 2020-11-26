<template>
<div class="wrapper">
  <div class="student" v-bind:class="{beingHelped: getIsHelped, isMe: getIsMe}">
    <div class="firstRowHolder">
      <div class="positionHolder">
        <p class="position">{{position}}</p>
      </div>
      <div class="imageHolder">
        <img class="image" :src="'/images/'+imagePath">
      </div>
      <div class="nameHolder">
        <h2 class="name">{{name}}</h2>
      </div>
    </div>
    <div class="secondRowHolder">
      <div class="questionHolder">
        <h3 class="question">Question:</h3>
        <p class="questionText">{{question}}</p>
      </div>
      <div class="helpInfoHolder">
        <div class="timeWaitingHolder">
          <p>Time waiting: {{timeWating}} min</p>
        </div>
        <div class="helperHolder">
          <p>Being helped by: {{helper}}</p>
        </div>
      </div>
      <div class="helpButtonHolder" v-if="fromTA">
        <h2 class="helpButton" v-if="fromTA" @click="updateHelping()">{{ helpButtonText }}</h2>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Student',
  props: {
    name: String,
    id: String,
    position: Number,
    imagePath: String,
    question: String,
    timeWating: Number,
    fromTA: Boolean
  },
  data() {
    return {
      isHelped: false,
      isMe: false,
      helper: 'No one',
      helpButtonText: 'Help'
    }
  },
  computed: {
    getIsHelped() {
      return this.isHelped;
    },
    getIsMe() {
      if (this.id === this.$root.$data.myID) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    async updateHelping() {
      console.log("Helping the student"); //FIXME for testing

      //FIXME untested, successfully calls the API but haven't tried using the params
      try {
        await axios.put("/session/join.php/", {
          StudentID: "6543",
          TaID: "Roku"
        });
      } catch (error) {
        console.log("Error helping student");
      }
      // this.$forceUpdate(); //Do I need this? Computationally expensive?
    },
    removeItem() {
      var index = this.$root.$data.queue.indexOf(this); //FIXME doesn't find it, if you want the student to be removed this needs to be fixed
      console.log(index); //FIXME
      if (index > -1) {
        this.$root.$data.queue.splice(index, 1);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em;
}

.student {
  border-width: medium;
  border-style: solid;
  border-color: #A9A9A9;
  background-color: #CAEBF2;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 1000px) {
  .student {
    flex-direction: row;
  }
}

.beingHelped {
  background-color: #A9A9A9;
  border-color: #2c3e50;
}

.isMe {
  border-color: #FF3B3F;
}

.firstRowHolder {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 0.5em;
}

@media only screen and (min-width: 700px) {
  .firstRowHolder {
    flex: 2;
  }
}

.positionHolder {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.position {
  font-size: 2em;
  margin: 0.25em 0em 0.25em 0.5em;
}

.imageHolder {
  display: flex;
  flex: 6;
  align-items: center;
  justify-content: center;
  background-color: inherit;
}

@media only screen and (min-width: 700px) {
  .imageHolder {
    flex: 4;
  }
}

.image {
  margin: 1em 0em 1em 0em;
  max-width: 60%;
  max-height: 100%;
}

@media only screen and (min-width: 700px) {
  .image {
    max-width: 35%;
    max-height: 100%;
  }
}

.informationHolder {
  display: flex;
  flex-direction: column;
  flex: 8;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
}

.nameHolder {
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 700px) {
  .nameHolder {
    flex: 2;
  }
}

.name {
  display: flex;
  font-size: 1em;
  margin: 0.5em 0.5em 1em 0em;
  font-weight: bolder;
}

@media only screen and (min-width: 1000px) {
  .name {
    font-size: 1.75em;
  }
}

.secondRowHolder {
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media only screen and (min-width: 700px) {
  .secondRowHolder {
    flex-direction: row;
  }
}

.questionHolder {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 4;
}

@media only screen and (min-width: 700px) {
  .questionHolder {
    flex: 10;
  }
}

@media only screen and (min-width: 1000px) {
  .questionHolder {
    margin-right: 2em;
  }
}

.question {
  font-size: 1em;
}

@media only screen and (min-width: 1000px) {
  .question {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
}

.questionText {
  font-size: 0.75em;
  margin: 0em 0.5em 0em 0.5em;
}

@media only screen and (min-width: 1000px) {
  .questionText {
    font-size: 1.25em;
  }
}

.helpInfoHolder {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
  font-size: 0.5em;
}

@media only screen and (min-width: 700px) {
  .helpInfoHolder {
    flex: 8;
    font-size: 0.75em;
  }
}

.helpButtonHolder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  margin-bottom: 1em;
}

@media only screen and (min-width: 700px) {
  .helpInfoHolder {
    margin-right: 1em;
  }
}

.helpButton {
  padding: 0.5em 1em 0.5em 1em;
  background-color: #FF3B3F;
  color: #EFEFEF;
  border-width: thin;
  border-style: solid;
  border-color: black;
  font-size: 0.75em;
}

@media only screen and (min-width: 700px) {
  .helpButtonHolder {
    margin-right: 1em;
    font-size: 1.5em;
  }
}
</style>
