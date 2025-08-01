import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: {
      'ID1': {
        name: 'Go to shop',
        completed: false,
        dueDate: '2025/01/12',
        dueTime: '16:30'
      },
      'ID2': {
        name: 'Get bananas',
        completed: false,
        dueDate: '2025/01/15',
        dueTime: '17:30'
      },
      'ID3': {
        name: 'Get apples',
        completed: false,
        dueDate: '2025/01/18',
        dueTime: '18:30'
      },
    }

    // tasks: [
    //   {
    //     id: 1,
    //     name: 'Go to shop',
    //     completed: false,
    //     dueDate: '2025/01/12',
    //     dueTime: '16:30'
    //   },
    //   {
    //     id: 2,
    //     name: 'Get bananas',
    //     completed: false,
    //     dueDate: '2025/01/15',
    //     dueTime: '17:30'
    //   },
    //   {
    //     id: 3,
    //     name: 'Get apples',
    //     completed: false,
    //     dueDate: '2025/01/18',
    //     dueTime: '18:30'
    //   },
    // ]
  }),
  getters: {
    allTasks: (state) => state.tasks
  },
  actions: {
    toggleTaskCompletion(taskId) {
      if (this.tasks[taskId]) {
        this.tasks[taskId].completed = !this.tasks[taskId].completed;
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
