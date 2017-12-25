export interface IBuilding {
    id: number;
    name: string;
    number: string;
    apartments?: IApartment[];
}

export interface IApartment {
    id: number;
    number: string;
    buildingId: number;
    isVacant: boolean;
    building: IBuilding;
    tenants?: ITenant;
}

export interface ITenant {
	id: number;
	name: string;
	email: string;
	mobile: string;
	isActive: boolean;
	apartment: IApartment;
}