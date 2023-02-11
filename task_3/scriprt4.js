

//================================= Задача 3 ====================================


// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

let priceProduct = parseFloat(prompt("Введить вартість товару"))
let quantityProduct = parseFloat(prompt("Введить кількість товару"))

const sumProducts = priceProduct * quantityProduct
const taxSumProducts = sumProducts * 0.05


document.write(`<table border=2px>
<tr>
<td>Загальна вартість<br> товару:</td>
<td>${sumProducts}</td>
</tr>
<tr>
	<td>ПДВ:</td>
	<td>${taxSumProducts}</td>
</tr>
</table>`)