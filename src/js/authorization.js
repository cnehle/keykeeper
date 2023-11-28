//функция для проверки пароля админа
function checkAccessCodeAdmin() {
    var accessCode = document.getElementById("accessCodeInput").value;
    if (accessCode === "admin")
    {
    document.getElementById("message").innerText = "Доступ разрешён! Добро пожаловать, администратор.";
    // тут будет переход на страничку админа
    }
    else
    document.getElementById("message").innerText = "Неверный код доступа";
}

//функция для проверки пароля куратора
function checkAccessCodeCurator() {
    var accessCode = document.getElementById("accessCodeInput").value;
    if (accessCode === "curator")
    {
    document.getElementById("message").innerText = "Доступ разрешён! Добро пожаловать, куратор.";
    // тут будет переход на страничку куратора
    }
    else
    document.getElementById("message").innerText = "Неверный код доступа";
}