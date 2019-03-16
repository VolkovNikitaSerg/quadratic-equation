const button = document.getElementById("solve-button");

function setVariables() {
    let a = Number(document.getElementById("var_a").value);
    let b = Number(document.getElementById("var_b").value);
    let c = Number(document.getElementById("var_c").value);
    return {a, b, c}
}

function solve_equation(a, b, c) {
    let d = (b ** 2) - (4 * a * c);
    if (d >= 0) {
        let x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(3);
        let x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(3);
        return {x1, x2, d}
    } else {
        return {x1: "No roots", x2: "No roots", d}
    }
}

function displayAnswer(x1, x2, d) {
    const x1_display = document.getElementById("first_root");
    const x2_display = document.getElementById("second_root");
    const discriminant_display = document.getElementById("discriminant");
    x1_display.value = x1;
    x2_display.value = x2;
    discriminant_display.value = d;
}

button.addEventListener("click", () => {
    let {a, b, c} = setVariables()
    let {x1, x2, d} = solve_equation(a,b,c)
    displayAnswer(x1, x2, d)
});
