function store(){
    let values = []
    for (let i = 0; i <= 3; i++){
        let a = document.getElementById(`P${i}`).value
        values[i] = a.substr(1, a.length-2).split(", ");
        const result = document.querySelector(".result");
        result.innerHTML += values
    }
    calculate(values);
}
function calculate(vals){
    let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = vals;
    const result = document.querySelector(".result");
    result.innerHTML = `
    x(t) = ${+(x3-3*x2+3*x1-x0).toFixed(3)}t<sup>3</sup> + ${+(3*x2-6*x1+3*x0).toFixed(3)}t<sup>2</sup> + ${+(3*x1-3*x0).toFixed(3)}t + ${x0}
    <br>
    y(t) = ${+(y3-3*y2+3*y1-y0).toFixed(3)}t<sup>3</sup> + ${+(3*y2-6*y1+3*y0).toFixed(3)}t<sup>2</sup> + ${+(3*y1-3*y0).toFixed(3)}t + ${y0}
    `
}

function resetForm(form){
    document.getElementById(form).reset()
    return true
}

