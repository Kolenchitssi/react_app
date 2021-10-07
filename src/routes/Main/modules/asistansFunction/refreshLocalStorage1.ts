import { FormType, RootState } from "../../../../store/models";

// export const refresh = (store: RootState) =>
//   localStorage.setItem("articles", JSON.stringify(store.reducerStarter));

const refreshLocalStorage = (newLocalStorage: FormType[]) =>
  localStorage.setItem("articles", JSON.stringify(newLocalStorage));

export default refreshLocalStorage;
