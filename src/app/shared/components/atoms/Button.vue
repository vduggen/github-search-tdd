<template>
  <v-btn>
    <slot />
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class Button extends Vue {

}
</script>

<style scoped>

</style>
