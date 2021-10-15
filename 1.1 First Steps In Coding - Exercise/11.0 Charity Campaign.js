function company(days, chefs, cakes, gof, pancake) {
    let allProducts = ((cakes * 45) + (gof * 5.8) + (pancake * 3.2)) * chefs
    return (allProducts * days * 0.875).toFixed(2)
}

// console.log(company('23', '8', '14', '30', '16'))
