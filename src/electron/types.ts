import { RequestStatuses } from "./constants"


export interface Controller extends
    IDistributionController,
    ICategoryController
{}


export interface IDistributionController {
    getAllDistributionTypes: () => Promise<OutputData<DistributionType>>
}

export interface ICategoryController {
    getAllCategories: () => Promise<OutputData<Category>>
}


export type OutputData<T> = {
    data: T[] | null
    status: RequestStatuses
    message: string
}


export type DistributionType = {
    id: string
    name: string
    amount: number
}


export type Category = {
    id: string
    name: string
}
