<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough' : task.completed }"
          >
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon
                name="event"
                size="18px"
                class="q-mr-xs"
              />
            </div>

            <div class="column">
              <q-item-label
                caption
                class="row justify-end"
              >
                {{ task.dueDate }}
              </q-item-label>

              <q-item-label
                caption
                class="row justify-end"
              >
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { useTasksStore } from 'src/stores/tasks-store';

export default {
  computed: {
    tasks() {
      const store = useTasksStore();
      return store.allTasks;
    }
  }
};
</script>

<style>

</style>
