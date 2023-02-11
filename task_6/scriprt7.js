

//================================= Задача 6 ====================================
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки


let priceProductA = parseFloat(prompt("Введить вартість товару A"))
let countProductA = parseInt(prompt("Введить кількість товару A"))

let priceProductB = parseFloat(prompt("Введить вартість товару B"))
let countProductB = parseInt(prompt("Введить кількість товару B"))

let priceProductC = parseFloat(prompt("Введить вартість товару C"))
let countProductC = parseInt(prompt("Введить кількість товару C"))

const resultProductA = priceProductA * countProductA
const resultProductB = priceProductB * countProductB
const resultProductC = priceProductC * countProductC
const totalProduct = countProductA + countProductB + countProductC
const total = resultProductA + resultProductB + resultProductC
const tax = total * 0.2

document.write(`
<table>
<tr>
  <th colspan=2>Чек</th>
  <th></th>
  <th></th>
</tr>
 <tr>
  <td>Bартість товару A</td>
  <td colspan=2>${resultProductA.toFixed(2)}</td>
 </tr>
 <tr>
	<td>Кількість товару A</td>
	<td>${countProductA}</td>
 </tr>
<tr>
  <td>Bартість товару B</td>
  <td colspan=2> ${resultProductB.toFixed(2)}</td>
</tr>
<tr>
<td>Кількість товару B</td>
<td>${countProductB}</td>
</tr>
<tr>
  <td>Bартість товару C</td>
  <td colspan=2> ${resultProductC.toFixed(2)}</td>
</tr>
<tr>
<td>Кількість товару C</td>
<td>${countProductC}</td>
</tr>
<tr>
  <td>Всого:</td>
  <td colspan=2>${total.toFixed(2)}</td>
</tr>
<tr>
  <td>ПДВ:</td>
  <td colspan=2>${tax.toFixed(2)}</td>
</tr>
<tr>
<td>Кількість всіх товарів</td>
<td>${totalProduct}</td>
</tr>
</table>
`)