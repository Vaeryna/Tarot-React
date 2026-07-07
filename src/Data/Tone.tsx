export interface Tone {
    tone: string;
}

export enum TonesKey {
    ABSURD,
    // CUTE,
    // CONFUSING

}

export const ToneData: Record<TonesKey, { name: string, vf: string }> = {
    [TonesKey.ABSURD]: {name: "absurd", vf: "Absurde"},
    // [TonesKey.CUTE]: {name: "cute", vf: "Mignon"},
    // [TonesKey.CONFUSING]: {name: "confusing", vf: "Confus"},
}