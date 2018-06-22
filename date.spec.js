describe('Дата и Время', function() {
    it('Создание', function() {
        var now = new Date();
        expect(typeof now).toBe('object');
        expect(now).toEqual(new Date());
        var dat = new Date(2018, 5, 22, 21, 55, 0, 350);
        expect(new Date(2018, 5).toString()).toBe('Fri Jun 01 2018 00:00:00 GMT+0300 (Саудовская Аравия, стандартное время)');
        expect(dat.toString()).toBe('Fri Jun 22 2018 21:55:00 GMT+0300 (Саудовская Аравия, стандартное время)');
    });
    it('Получение компонентов даты', function() {
        var now = new Date();
        expect(now.getFullYear()).toBe(2018);
        expect(now.getMonth()).toBe(5);
        expect(now.getTimezoneOffset()).toBe(-180);
        expect(typeof now.getDate()).toBe('number'); //зависит от дня запуска теста

        now.setHours(0);
        expect(now.getHours()).toBe(0);

        var dat = new Date(2018, 5, 22, 21, 55, 0);
        expect(dat.getDate()).toBe(22);
        expect(dat.getHours()).toBe(21);
        expect(dat.getMinutes()).toBe(55);
        expect(dat.getSeconds()).toBe(0);
        expect(dat.getMilliseconds()).toBe(0);
        expect(dat.getDay()).toBe(5);
    });
    it('Установка компонентов даты', function() {
        var now = new Date();
        now.setHours(0);
        expect(now.getHours()).toBe(0);
    });
    it('Автоисправление даты', function() {
        var dat = new Date(2018, 5, 22);
        dat.setDate(dat.getDate() + 2);
        expect(dat.getDate()).toBe(24);
        dat.setDate(-1);
        expect(dat.getMonth()).toBe(4);
        expect(dat.getDate()).toBe(30);
    });
    it('Преобразование к числу, разность дат', function() {
        var dat = new Date();
        expect(+dat).toBe(dat.valueOf());
    });
    it('Форматирование и вывод дат', function() {
        var dat = new Date(2014, 11, 31, 12, 30, 0);

        var options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        expect(dat.toLocaleString('ru', options)).toBe('среда, 31 декабря 2014 г. от Рождества Христова, 12:30:00');
        expect(dat.toLocaleString('en-US', options)).toBe('Wednesday, December 31, 2014 Anno Domini, 12:30:00 PM');
        expect(dat.toLocaleDateString()).toBe('31.12.2014');
        expect(dat.toLocaleTimeString()).toBe('12:30:00');
        expect(dat.toLocaleString('en-US', {
            weekday: 'short'
        })).toBe('Wed');
    });
    it('Разбор строки, Date.parse', function() {
        var tm = Date.parse('2012-01-26T13:51:50.417-07:00');
        expect(tm).toBe(1327611110417);
    });
});