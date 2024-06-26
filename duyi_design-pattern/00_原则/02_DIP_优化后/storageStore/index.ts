import { Store } from '../store'

export const store: Store = {
    async getData(key: string) {
        return JSON.parse(localStorage.getItem(key) || 'null')
    },
    async setData(key: string, data: any) {
        localStorage.setItem(key, data)
    },
    async hasData(key: string) {
        return !!localStorage.getItem(key)
    }
}