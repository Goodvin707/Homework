    window.addEventListener('load', function () {

        
        let butPage = document.getElementById("Button1");
        let butStyle = document.getElementById("Button2");
        butPage.addEventListener('click', function (){
          window.location.href = "http://www.mathprofi.ru/kompleksnye_chisla_dlya_chainikov.html#k";
        });
        butStyle.addEventListener('click', function(){
          document.body.style.backgroundColor = "green";
        });
    });
