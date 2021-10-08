import { createAction } from "../../../../store/utils";


export const SUCCESS_CONNECTED: string = "SUCCESS_CONNECTED";

export const successConnected = createAction<boolean>(SUCCESS_CONNECTED);
