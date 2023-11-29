//класс для станции
class station {
    constructor(name, id, rules)
    {
        this.name = name;      //название станции
        this.id = id;          //номер станции
        this.status = false;   //флаг свободна - false, занята - true
        this.rules = rules;    //правила
    }

    //функция смены статуса
    changeStatus()
    {
        this.status = !this.status;
    }

    //возвращает правила станции
    get rules()
    {
        return this.rules;
    }

    //возвращает статус станции
    get status()
    {
        return this.status;
    }
}