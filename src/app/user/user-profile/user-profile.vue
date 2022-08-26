<template>
  <div>
    UserProfile
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IUser from '../IUser';

@Component
export default class UserProfile extends Vue {
  @Prop({ type: Object, required: true, default: () => ({}) }) readonly user!: IUser;
}
</script>

<style scoped>

</style>
