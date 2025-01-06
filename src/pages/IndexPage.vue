<template>
  <q-page padding>
    <button
      @click="counter++"
      style="position: absolute; right: 10px;"
    >
      {{ counter }}
    </button>
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

    <!-- Shortcut for v-bind is using colon only (:) -->
    <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStyle"
    >

    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>

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

    <hr>

    <p>Uppercase Message: {{ messageUppercase }}</p>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello quasar",
        counter: 0
      }
    },
    computed: {
      messageUppercase() {
        console.log('messageUppercase method was fired')
        return this.message.toUpperCase()
      },
      errorStyle() {
        if (this.message.length > 22) {
          return {
            'color' : 'red',
            'background' : 'pink'
          }
        }
        return {}
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
      // },
    },
    directives: {
      autofocus: {
        mounted(el) {
          el.focus()
        }
      }
    },
    beforeCreate() {
      console.log('beforeCreate') // lifecycle hook before app creation
    },
    created() {
      console.log('created') // lifecycle hook when the app is created
    },
    beforeMount() {
      console.log('beforeMount') // lifecycle hook before it mount or viewed on browser
    },
    mounted() {
      console.log('mounted') // lifecycle hook when it mounts or viewed on browser
    },
    beforeUpdate() {
      console.log('beforeUpdate') // lifecycle hook before the changes take effect
    },
    updated() {
      console.log('updated') // lifecycle hook when changes are applied and the page reloads
    },
    beforeUnmount() {
      console.log('beforeUnmount') // lifecycle hook before unmounting or removed from displaying on browser
    },
    unmounted() {
      console.log('unmounted') // lifecycle hook when the page is unmounted or not viewed on browser
    }
  }
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }
  .error {
    color: red;
    background: pink;
  }
</style>
