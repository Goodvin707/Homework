window.onload = goToPage;

    function goToPage(){
    const button = document.getElementById("Button1")
    button.onclick = ButtonClick1;
    }
    function ButtonClick1() {
    document.location.href = "http://www.mathprofi.ru/kompleksnye_chisla_dlya_chainikov.html#k";
    }

    function changeBackgroundColor(){
    const button = document.getElementById("Button2")
    button.onclick = ButtonClick2;
    }

    function ButtonClick2() {
    document.body.style.backgroundColor = ('green');
    }