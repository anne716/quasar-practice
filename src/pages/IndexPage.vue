<template>
  <q-page padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        :delete-task="deleteTask"
      >
        {{ task.name }}
      </task>
    </ul>
  </q-page>
</template>

<script>
import TaskComponent from 'components/TaskComponent.vue';

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
  },
  components: {
    'task' : TaskComponent
  }
}
</script>

<style>

</style>
