export interface ICard {
    card_number: number;
    cvv: number;
    expiration_month: string;
    expiration_year: string;
    email: string;

    expireAt?: Date;
    token?: string;
    _id?: string
}

export interface IRequest {
    message: string;
    data: ICard | [];
    error: boolean;
}