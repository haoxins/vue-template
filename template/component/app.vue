
<template>
  <main>{{message}}</main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      message: 'hello'
    }
  }
}

</script>

<style scoped>

main {
  display: grid;
}

</style>
