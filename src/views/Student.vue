<template>
  <div class="student">
    <HelloWorld msg="Welcome to the CS 142 Help Center"/>
    <QueueList :queue="queue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import QueueList from '../components/QueueList.vue'
export default {
  name: 'Student',
  components: {
    HelloWorld,
    QueueList
  },
  computed: {
    queue() {
      return this.$root.$data.QueueList;
    }
  }
}
</script>
