<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <div>{{ task.name }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            name: 'Go to shop',
            dueDate: '2019/05/12',
            dueTime: '18:30'
          },
          {
            name: 'Get bananas',
            dueDate: '2020/01/12',
            dueTime: '13:30'
          },
          {
            name: 'Get apples',
            dueDate: '2018/07/21',
            dueTime: '12:30'
          }
        ]
      }
    },
    methods: {
      deleteTask(index) {
        this.tasks.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
