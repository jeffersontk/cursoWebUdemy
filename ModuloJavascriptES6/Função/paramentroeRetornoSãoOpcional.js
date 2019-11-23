function area(largura, altura) {
    let area = largura * altura
    if (area >= 20) {
        console.log(`valor acima do permitido, ${area}m²`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6, 7))
console.log(area(5, 5))