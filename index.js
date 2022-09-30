window.onload = function () {
    const bottonList = document.querySelectorAll(".text-bar");
    const mainList = document.querySelectorAll(".main-bar");
    const leftList = document.querySelectorAll(".leftText");
    const leftTextList = document.querySelectorAll(".leftText-chapter");

    bottonList.forEach((element) => {
        element.addEventListener("click", bottonSwitch)
    });

    leftList.forEach(element => {
        element.addEventListener("click", leftSwitch)
    });

    leftTextList.forEach(element => {
        element.addEventListener("click", leftTextSwitch)
    });

    function bottonSwitch() {
        clearAll();
        for (let index = 0; index < bottonList.length; index++) {
            if (this == bottonList[index]) {
                bottonList[index].classList.add("active");
                mainList[index].classList.remove("pageOff");
                leftList[index].classList.add("leftActive");
            }
        }
    }

    function leftSwitch() {
        clearAll();
        for (let index = 0; index < leftList.length; index++) {
            if (this == leftList[index]) {
                bottonList[index].classList.add("active");
                mainList[index].classList.remove("pageOff");
                leftList[index].classList.add("leftActive");
            }
        }
    }

    function leftTextSwitch() {
        clearAll();
        for (let index = 0; index < leftTextList.length; index++) {
            if (this == leftTextList[index]) {
                leftTextList[index].classList.add("leftActive");
                if (index <= 5) {
                    bottonList[1].classList.add("active");
                    mainList[1].classList.remove("pageOff");
                    leftList[1].classList.add("leftActive");
                }
                else {
                    bottonList[2].classList.add("active");
                    mainList[2].classList.remove("pageOff");
                    leftList[2].classList.add("leftActive");
                }
            }
        }
    }

    function clearAll() {
        for (let index = 0; index < leftTextList.length; index++) {
            leftTextList[index].classList.remove("leftActive");
            if (index <= 3) {
                bottonList[index].classList.remove("active");
                mainList[index].classList.add("pageOff");
                leftList[index].classList.remove("leftActive");
            }
        }
    }
}

