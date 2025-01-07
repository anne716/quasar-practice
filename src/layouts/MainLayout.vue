<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Quasar Practice App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="link in linksList"
          :key="link.title"
          :to="link.url"
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <NavigationLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavigationLink from 'src/components/NavigationLink.vue'

const linksList = [
  {
    title: 'Todo',
    icon: 'list',
    url: '/'
  },

  {
    title: 'Settings',
    icon: 'settings',
    url: '/settings'
  }
]
</script>

<!-- If you want to use scss instead of css, just specify the language in the style tag then you can format your styles in scss -->
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
}
</style>
