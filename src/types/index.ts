export type GlobalStateType = {
    refreshToken?: string;
    accessToken?: string;
};
export type GlobalStateReducerType = Partial<GlobalStateType>;
