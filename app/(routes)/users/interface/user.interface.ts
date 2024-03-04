
interface addressForm {
        id: number,
        regionId: number,
        districtId: number,
        address: string
}
export interface IUser  {
    firstName: string,
    lastName: string,
    secondName: string,
    birthDate: string,
    username: string,
    password: string,
    phone: string,
    email: string,
    authorityId: number,
    addressForm:addressForm
}