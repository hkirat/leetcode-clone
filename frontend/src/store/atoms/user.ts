import { atom } from "recoil";

export const userAtom = atom<{
    loading: boolean;
    user?: {
        email: string;
    }
}>({
    key: "userAtom",
    default: {
        loading: true
    }
})