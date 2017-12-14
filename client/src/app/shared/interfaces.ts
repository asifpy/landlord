export interface IBuilding {
    id: number;
    name: string;
    number: string;
}

export interface IApartment {
    id: number;
    number: string;
    buildingId: number;
    isVacant: boolean;
}