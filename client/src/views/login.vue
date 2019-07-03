<template>
  <div>
    <b-form-input v-model="text" placeholder="Email:"></b-form-input>
    <div class="mt-2">Value: {{ email }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      email: ''
    }
  }
}
</script>