export type Budget = {
    id?: string
    client: string
    phone: string
    observation: string
    total: number
    items: Item[]
    creationDate: Date
    expirationDate?: Date
}

type Item = {
    name: string
    quantity: number
    price: number
}