<template>
<div class="getHelpToolbarWrapper">
    <h2>Enter Your Question:</h2>
    <input type="text" class="questionEnterText">
    <div class="getHelpButtonHolder">
      <h2 class="getHelpButton">Get Help</h2>
    </div>
    <p class="questionsRemaining">You have {{questionsRemaining}} questions left today</p>
</div>
</template>

<script>
export default {
  name: 'GetHelpToolbar',
  props: {
    questionsRemaining: Number
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
</style>
