<template>
<div class="wrapper">
  <div class="students">
    <div class="student" v-for="student in queue" :key="student.id">
      <div class="imageHolder">
        <img class="image" :src="'/images/'+student.image">
      </div>
      <div class="informationHolder">
        <h2 class="name">{{student.name}}</h2>
        <div class="questionHolder">
          <h3 class="question">Question:</h3>
          <p>{{student.question}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'QueueList',
  props: {
    queue: Array
  },
}
</script>

<style scoped>

.wrapper {
  display: flex;
  justify-content: center;
  margin: 2em;
}

.students {
  width: 100%;
}

.student {
  border-width: medium;
  border-style: solid;
  border-color: black;

  background-color: #CAEBF2;
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
}

.imageHolder {
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: inherit;
}

.image {
  margin: 1em;
  max-width: 50%;
  max-height: 100%;
}

.informationHolder {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
}

.name {
  margin: 0.5em 0em 1em 0em;
  font-weight: bolder;
}

.question {
  margin-bottom: 0.5em;
}
</style>
