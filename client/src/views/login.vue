<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="email-group" type="email" label="Email Address:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          required
          placeholder="Enter your email address"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" type="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import auth from "../auth";

export default {
  name: "app",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
};
</script>