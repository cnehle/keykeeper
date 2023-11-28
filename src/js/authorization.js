function checkAccessCode() {
    var accessCode = document.getElementById("accessCodeInput").value;
    if (accessCode === "admin")
    {
    document.getElementById("message").innerText = "Доступ разрешён! Добро пожаловать, администратор.";
    // тут будет переход на страничку админа
    }
    else
    document.getElementById("message").innerText = "Неверный код доступа";
}