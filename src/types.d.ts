interface Window {
    electron: ElectronApi
}

type ElectronApi = {

    getAllDistributionTypes: () => Promise<any>

    getAllCategories: () => Promise<any>

}
