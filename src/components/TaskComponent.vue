  <template>
    <li>
      <div><slot></slot></div>
      <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </template>

  <script>
  export default {
    props: ['task', 'index', 'deleteTask']
  }
  </script>

  <style scoped>

  </style>
