const colors = ["#ff0000", "ff5e00", "#fff700", "#8c17n3"]

document.getElementById ("switchclr").addEventListener ("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});