let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("num"));

buttons.map(num => {
    num.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case ("C"):
                display.innerText = "";
            Break;
            case ("="):
                try {
                display.innerText = eval(display.innerText);

            } catch {
              display.innerText = "Error!";
            }
            Break;
            case ("X"):
                display.innerText += "*";
            Break;
            default:
                display.innerText += e.target.innerText;
        }


    })
})