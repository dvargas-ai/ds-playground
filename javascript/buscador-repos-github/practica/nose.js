// Calculadora de suma de Riemann (en español)
// Uso:
// riemannSum(f, a, b, n, method)
// f: función (x) => ... o string como "Math.sin(x)"
// a, b: límites
// n: número de subintervalos
// method: "left", "right", "mid", "trap"

function parseFunc(f){
	if(typeof f === 'function') return f;
	if(typeof f === 'string') return new Function('x', 'return ' + f + ';');
	throw new Error('f debe ser función o string');
}

function riemannSum(f, a, b, n=100, method='mid'){
	const fn = parseFunc(f);
	if(n <= 0) throw new Error('n debe ser entero positivo');
	const dx = (b - a) / n;
	let sum = 0;
	for(let i=0;i<n;i++){
		let x;
		if(method === 'left') x = a + i*dx;
		else if(method === 'right') x = a + (i+1)*dx;
		else if(method === 'mid') x = a + (i+0.5)*dx;
		else if(method === 'trap'){
			// trapezoidal: accumulate average of endpoints
			const x1 = a + i*dx;
			const x2 = a + (i+1)*dx;
			sum += 0.5*(fn(x1) + fn(x2))*dx;
			continue;
		} else {
			throw new Error('método desconocido: usar left, right, mid o trap');
		}
		sum += fn(x)*dx;
	}
	return sum;
}

// Ejemplos:
// console.log(riemannSum('Math.sin(x)', 0, Math.PI, 1000, 'mid')) // ~2
// console.log(riemannSum(x=>x*x, 0, 1, 1000, 'trap')) // ~1/3

module.exports = { riemannSum };
