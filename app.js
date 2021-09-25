
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");
    const clear = document.querySelector(".btn-clear");
    const equal = document.querySelector(".btn-equal");
    
    //retrieve data from numbers that are clicked
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const value = e.target.dataset.num;
            screen.value += value
        })
    });
    
    //calculate
    equal.addEventListener("click", () => {
        if (screen.value === '') {
            screen.value = 'Please Enter a value';
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //clear
    clear.addEventListener("click", () => {
        screen.value = "";
    })

