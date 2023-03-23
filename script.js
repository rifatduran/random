const div = document.querySelector(".text")
const base = document.querySelector(".base")
let text = div.textContent
div.innerHTML = ""

let fonts = [
    {fam : "'Courier New', Courier, monospace"},
    {fam : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"},
    {fam : "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"},
    {fam : "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"},
    {fam : "'Times New Roman', Times, serif"},
    {fam : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"},
    {fam : "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"},
    {fam : "Arial, Helvetica, sans-serif"},
    {fam : "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"},
    {fam : "Georgia, 'Times New Roman', Times, serif"},
    {fam : "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"},
    {fam : "Verdana, Geneva, Tahoma, sans-serif"}
]


div.style.fontFamily = `${fonts[Math.floor(Math.random() * 7)].fam}`
for (let i = 0; i < text.length; i++) {
    const span = document.createElement("a")
    span.textContent = text[i]
    span.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    base.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    base.style.boxShadow = `0 4px 30px ${base.style.backgroundColor}`
    div.appendChild(span)
}


function changecolor() {
    div.style.fontFamily = `${fonts[Math.floor(Math.random() * 12)].fam}`
    div.innerHTML = ""
    
    let opacity = 0;
    div.style.opacity = opacity;

    const interval = setInterval(function () {
        opacity += 0.02
        div.style.opacity = opacity;
        if(opacity >= 1) {
            clearInterval(interval)
        }
    }, 30)

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("a")
        span.textContent = text[i]
        span.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        base.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        base.style.boxShadow = `0 4px 30px ${base.style.backgroundColor}`
        div.appendChild(span)
    }
}

setInterval(changecolor, 3000)
