// Exercício 1.3 - Conversão de Tipos (Coerção)
// Realize as seguintes operações e observe os resultados:
// - `5 + "10"` (número + string)
// - `"20" - 5` (string - número)
// - `5 == "5"` vs `5 === "5"` (comparações)
// - `0 == false` vs `0 === false`
// - `Number("42")`, `Number("abc")`, `Number(true)`
// - `String(100)`, `String(null)`, `String(undefined)`
// - `Boolean(0)`, `Boolean("")`, `Boolean("false")`, `Boolean([])`
//
// Anote os resultados e identifique os padrões de conversão.

console.log(5+"10") //15b           x//510
console.log("20" - 5) // 20-5       x//15
console.log(5 == "5") // true       ok
console.log(0 == false, 0 === false) // true, false
console.log(Number("42"), Number("abc"), Number(true)) // 42, ?, 1      // 4 ok, NaN, 1 ok
console.log(String(100), String(null), String(undefined)) // 100, ?, ? // 100, null, undefined
console.log(Boolean(0), Boolean(""), Boolean("false"), Boolean([])) // false, false, true, false

/*
Onde errei
console.log(5+"10") //15b           x//510
console.log("20" - 5) // 20-5       x//15
Number("abc") --> NaN
String(null), String(undefined) --> undefined

Interessante:
Boolean("false") --> true
*/