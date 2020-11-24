<template>
  <div class="FAQWrapper">
    <h1 class="header">Frequently Asked Questions</h1>
    <div class="lab" v-for="lab in faq" :key="lab.labTitle">
      <h2 class="labTitle">{{lab.labTitle}}</h2>
      <div class="questions" v-for="question in lab.questions" :key="question.question">
        <h3 class="question">{{question.question}}</h3>
        <p class="answer">{{question.answer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQPage',
  components: {

  },
  computed: {
    faq() {
      return this.$root.$data.faq;
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 1em;
}
.labTitle {
  margin-bottom: 0.5em;
}
.question {
  margin-bottom: 0.25em;
}
.answer {
  margin-bottom: 1.5em;
}
.lab {
  margin-bottom: 4em;
}
</style>
