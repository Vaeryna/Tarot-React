export enum DrawType {
FIRSTNAME ,
THREECARDS
}


export const DrawData: Record<DrawType, { name: string, vf: string }> = {
    [DrawType.FIRSTNAME]: {name: "firstname", vf: "Tirage au prénom"},
    [DrawType.THREECARDS]: {name: "3cards", vf: "Tirage à 3 cartes"},

}