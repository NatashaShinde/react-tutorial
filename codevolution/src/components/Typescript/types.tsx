// {id: 23, name: 'Natasha', role: 'FE', projects: [23, 45, 67, 'KyaTrade']}
// {id: '34', name: 'Rockey', role: 'BE'}

type Info = {
	id: number | string
	name: string
	role: 'BE' | 'FE'
	projects?: (number | string)[]
}

const a: number = 23

const user: Info = {
	id: 1,
	name: 'samco',
	role: 'BE',
	projects: [34, 'samco'],
}

//=================================

// string[]
// number[]
// string | number
// string[] | number[]

// (string | number)[]

// 2 + 3 * 4

let prices: number[]

prices = [33, 34, 55, '344']

//tripule

// type User =

// [23, 'Natasha', 'FE']

let user: [number, string, string]

// ========================
let cmp: string | number | null | undefined

cmp = 34
cmp = '34'

cmp = null
cmp = undefined
