

//=================================Задача 0====================================
// Задача 0. Обчислити значення виразів
// S1=a+12+b
// S2=a+b2a 
// S3=3(a+b)c 
// S4=sin⁡(a / -b) 

let firstNumber = parseInt(prompt("Введить число а"))
let secondNumberb = parseInt(prompt("Введить число b"))
let thirdNumber = parseInt(prompt("Введить число c"))



const s1 = firstNumber + 12 + secondNumberb

const s2 = Math.sqrt((firstNumber + secondNumberb) / (2 * firstNumber))

const s3 = Math.cbrt((firstNumber + secondNumberb) * thirdNumber)
const s4 = Math.sin(firstNumber / -2)




document.write(`<p>S<sub>1</sub> = ${s1.toFixed(2)}</p>`)
document.write(`<p>S<sub>2</sub> = ${s2.toFixed(2)}</p>`)
document.write(`<p>S<sub>3</sub> = ${s3.toFixed(3)}</p>`)
document.write(`<p>S<sub>4</sub> = ${s4.toFixed(3)}</p>`)
