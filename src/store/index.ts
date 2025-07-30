import { createStore, Store } from "easy-peasy";
import { CurrentUserStore, userModel } from "./authModel";

export interface AppStore {
  user: CurrentUserStore;
}

const storeModel: AppStore = {
  user: userModel,
};

export const store: Store<AppStore> = createStore(storeModel);
