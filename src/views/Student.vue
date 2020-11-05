<template>
  <div class="studentWrapper">
    <HelloWorld msg="Welcome to the CS 142 Help Center"/>
    <QueueList :queue="queue" :fromTA='false'/>
    <GetHelpToolbar :questionsRemaining='5'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import QueueList from '../components/QueueList.vue'
import GetHelpToolbar from '../components/GetHelpToolbar'
export default {
  name: 'Student',
  components: {
    HelloWorld,
    QueueList,
    GetHelpToolbar
  },
  computed: {
    queue() {
      return this.$root.$data.queue;
    }
  }
}
</script>
