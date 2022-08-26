<template>
  <div>
    <UserForm />

    <UserProfile :user="user" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import IUser from './IUser';

// import IUser from './IUser';

import UserForm from './user-form/user-form.vue';
import UserProfile from './user-profile/user-profile.vue';

@Component({
  components: {
    UserForm,
    UserProfile,
  },

  computed: {
    ...mapState(['user']),
  },
})
export default class UserView extends Vue {
  user!: IUser
}
</script>
