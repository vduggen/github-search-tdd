// eslint-disable-next-line import/no-extraneous-dependencies
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import userFixture from '@/tests/unit/fixtures/user';
import UserView from './user.vue';
import UserForm from './user-form/user-form.vue';
import UserProfile from './user-profile/user-profile.vue';

import { IUserStoreState, UserStoreState } from './user-state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserView', () => {
  let state: IUserStoreState;

  function build() {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state }),
    });
    const findComponentUserForm = () => wrapper.findComponent(UserForm);
    const findComponentUserProfile = () => wrapper.findComponent(UserProfile);

    return {
      wrapper,
      userForm: findComponentUserForm,
      userProfile: findComponentUserProfile,
    };
  }

  beforeEach(() => {
    state = { ...UserStoreState };
  });

  it('renders the component', () => {
    const { wrapper } = build();

    const htmlWrapper = wrapper.html();
    expect(htmlWrapper).toMatchSnapshot();
  });

  it('renders main child components', () => {
    const { userForm, userProfile } = build();

    const existUserForm = userForm().exists();
    const existUserProfile = userProfile().exists();

    expect(existUserForm).toBe(true);
    expect(existUserProfile).toBe(true);
  });

  it('passes a binded user prop to user profile component', () => {
    state.user = userFixture;

    const { userProfile } = build();

    const userProfileVm = userProfile().vm as unknown as IUserStoreState;

    expect(userProfileVm.user).toBe(state.user);
  });
});
