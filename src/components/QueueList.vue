<template>
  <div class="wrapper">
    <div class="students">
      <p> Here's the students: </p>
      <div class="student" v-for="student in queue" :key="student.id">
        <p>{{student.name}}</p>
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
