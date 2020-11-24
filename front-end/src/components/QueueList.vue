<template>
<div class="wrapper">
  <h2 class="title">Help Queue:</h2>
  <div class="students">
    <div class="student" v-for="student in queue" :key="student.id">
      <Student :name="student.name" :id="student.id" :position="student.position" :imagePath="student.image" :question="student.question" :timeWating="student.timeWaiting" :fromTA='fromTA'/>
    </div>
  </div>
</div>
</template>

<script>
import Student from '@/components/Student.vue'
export default {
  name: 'QueueList',
  components: {
    Student
  },
  props: {
    queue: Array,
    fromTA: Boolean
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
}

.students {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
