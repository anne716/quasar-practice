import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        name: 'Go to shop',
        completed: false,
        dueDate: '2025/01/12',
        dueTime: '16:30'
      },
      {
        id: 2,
        name: 'Get bananas',
        completed: false,
        dueDate: '2025/01/15',
        dueTime: '17:30'
      },
      {
        id: 3,
        name: 'Get apples',
        completed: false,
        dueDate: '2025/01/18',
        dueTime: '18:30'
      },
    ]
  }),
  getters: {
    allTasks: (state) => state.tasks
  },
  actions: {

  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
