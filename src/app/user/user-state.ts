import IUser from './IUser';

interface IUserStoreState {
  user: IUser
}

const UserStoreState: IUserStoreState = {
  user: {
    name: '',
  },
};

export {
  UserStoreState,
  IUserStoreState,
};

export default {
  state: UserStoreState,
  mutations: {},
  actions: {},
  getters: {},
};
