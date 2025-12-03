function func() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert("name: " + String(isim) + "password: " + String(sifre));
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}
function sifreUnuttum() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert("Yeni Kullanıcı Adı: " + String(isim) + "\nYeni Şifre: " + String(sifre));
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}
function kayıt() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert(" Kullanıcı Adı: " + String(isim) + "\n Şifre: " + String(sifre));
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}