<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="email-group" label="Email Address:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email address"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" type="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
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
    onSubmit() {
      auth.login(this.form.email, this.form.password, (data) => {
        alert(data.success);
      });
    }
  }
};
</script>
