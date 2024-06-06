<template>
  <div id="app">
    <pre>
      <code>
        {{ variables }}
      </code>
    </pre>
  </div>
</template>

<script>
import variables from '@/assets/variables.scss'

export default {
  name: 'App',
  mounted() {
    console.log(variables)
  },
  computed: {
    variables() {
      return variables
    },
  },
}
</script>
<style></style>

