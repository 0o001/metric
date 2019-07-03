const convertMetric = (value, oldMetric, newMetric) => {

	const metric = {

		Y: {
			name: 'Yotta',
			value: 24
		},
		Z: {
			name: 'Zetta',
			value: 21
		},
		E: {
			name: 'Exa',
			value: 18
		},
		P: {
			name: 'Peta',
			value: 15
		},
		T: {
			name: 'Tera',
			value: 12
		},
		G: {
			name: 'Giga',
			value: 9
		},
		M: {
			name: 'Mega',
			value: 6
		},
		k: {
			name: 'Kilo',
			value: 3
		},
		h: {
			name: 'Hecto',
			value: 2
		},
		da: {
			name: 'Deca',
			value: 1
		},
		'-': {
			name: '-',
			value: 0
		},
		d: {
			name: 'Deci',
			value: -1
		},
		c: {
			name: 'Centi',
			value: -2
		},
		m: {
			name: 'Milli',
			value: -3
		},
		u: {
			name: 'Micro',
			value: -6
		},
		n: {
			name: 'Nano',
			value: -9
		},
		p: {
			name: 'Pico',
			value: -12
		},
		f: {
			name: 'Femto',
			value: -15
		},
		a: {
			name: 'Atto',
			value: -18
		},
		z: {
			name: 'Zepto',
			value: -21
		},
		y: {
			name: 'Yocto',
			value: -24
		}

	}

	const difference = metric[oldMetric].value - metric[newMetric].value

	return value * Number('1e' + difference)

}

console.log(convertMetric(100, 'd', '-'))