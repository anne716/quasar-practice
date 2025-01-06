<template>
  <q-page padding>
    <!-- Using keyboard events without shortcut -->
    <!-- <input v-model="message" @keyup="handleKeyup"> -->

    <!-- Shortcut for keyboard events: @keyup.<key-name> -->
    <!-- Demo for mouse events @mouse -->
    <!-- <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      @mouseleave="alertMessage"
    > -->

    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    >

    <button @click="clearMessage">Clear</button>

    <!-- Using v-show directive (renders css display attribute)-->
    <!-- <h5
      v-show="message.length"
      class="border-grey">
        {{ message }}
    </h5> -->

    <!-- Using v-if directive (removes completely from DOM) -->
    <h5
      v-if="message.length"
      class="border-grey">
        {{ message }}
    </h5>
    <h6 v-else>No message entered.</h6>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello quasar"
      }
    },
    methods: {
      clearMessage() {
        this.message = ""
      },
      alertMessage() {
        alert(this.message)
      },
      // handleKeyup(e) {
      //   console.log(e) // To check the keyboard attributes (e.g. keyCode)

      //   if (e.keyCode == 27) {
      //     this.clearMessage()
      //   }
      //   else if (e.keyCode == 13) {
      //     this.alertMessage()
      //   }
      // }
    }
  }
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }
</style>
