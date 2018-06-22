describe('Array', function () {
    it('craete', function () {
        var emptyArray = [],
            otherEmptyArray = new Array,
            arrayWithLength = new Array(4),
            arrayWithData = ['Апельсинка', 'Яблочка', 'Банан'];

        expect(emptyArray.length).toBe(0);
        expect(otherEmptyArray.length).toBe(0);
        expect(arrayWithLength.length).toBe(4);
        expect(arrayWithData.length).toBe(3);

        expect(emptyArray).toEqual(otherEmptyArray);
        expect(emptyArray).not.toBe(otherEmptyArray);
        expect(arrayWithLength).toEqual([undefined, undefined, undefined, undefined]);
        expect(arrayWithData).toEqual(['Апельсинка', 'Яблочка', 'Банан']);
    });

    it('получить, заменить и добавить элементый', function () {
        var array = ['Апельсинка', 'Яблочка', 'Банан'],
            index;

        expect(array[0]).toBe('Апельсинка');
        index = 1;
        expect(array[index]).toBe('Яблочка');
        expect(array[2]).toBe('Банан');

        array[0] = 'Грушка';

        expect(array).toEqual(['Грушка', 'Яблочка', 'Банан']);

        index = 2;
        array[index] = 'Огурец';

        expect(array).toEqual(['Грушка', 'Яблочка', 'Огурец']);

        expect(array.length).toBe(3);

        array[3] = 'Вишня';

        expect(array).toEqual(['Грушка', 'Яблочка', 'Огурец', 'Вишня']);
        expect(array.length).toBe(4);


        array[5] = 'Дыня';

        expect(array).toEqual(['Грушка', 'Яблочка', 'Огурец', 'Вишня', undefined, 'Дыня']);
        expect(array.length).toBe(6); // array.length === lastIndex + 1
    });

    it('свойство length', function () {
        var array = ['Апельсинка', 'Яблочка', 'Банан'];

        expect(array.length).toBe(3);

        array.length = 5;

        expect(array).toEqual(['Апельсинка', 'Яблочка', 'Банан', undefined, undefined]);

        array.length = 2;

        expect(array).toEqual(['Апельсинка', 'Яблочка']);

        array = [];
        array.length = 2; // new Array(5);

        expect(array).toEqual([undefined, undefined]);
    });

    it('оператор delete', function () {
        var array = ['Апельсинка', 'Яблочка', 'Банан'];

        delete array[1]; // array[1] = undefined

        expect(array.length).toBe(3);
        expect(array).toEqual(['Апельсинка', undefined, 'Банан']);
    });

    it('цикл for', function () {
        var array = ['Апельсинка', 'Яблочка', 'Банан'],
            spy = jasmine.createSpy('spy');

        for (var index = 0; index < array.length; index++) {
            spy(array[index]);
        }

        expect(spy.calls.count()).toBe(3);
        expect(spy).toHaveBeenCalledWith('Апельсинка');
        expect(spy).toHaveBeenCalledWith('Яблочка');
        expect(spy).toHaveBeenCalledWith('Банан');
    });

    describe('методы', function () {
        it('pop', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'];

            expect(array.pop()).toBe('Банан');
            expect(array).toEqual(['Апельсинка', 'Яблочка']);
        });

        it('push', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'];

            array.push('Груша', 'Вишня');

            expect(array).toEqual(['Апельсинка', 'Яблочка', 'Банан', 'Груша', 'Вишня']);
        });

        it('shift', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'];

            expect(array.shift()).toBe('Апельсинка');
            expect(array).toEqual(['Яблочка', 'Банан']);
        });

        it('unshift', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'];

            array.unshift('Груша', 'Вишня');

            expect(array).toEqual(['Груша', 'Вишня', 'Апельсинка', 'Яблочка', 'Банан']);
        });

        it('join', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'];

            expect(array.join('_')).toBe('Апельсинка_Яблочка_Банан');

            array = [0, 1, 2];

            expect(array.join('_')).toBe('0_1_2');
        });

        it('splice', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан', 'Груша', 'Вишня'];

            expect(array.splice(0, 1)).toEqual(['Апельсинка']);
            expect(array).toEqual(['Яблочка', 'Банан', 'Груша', 'Вишня']);

            expect(array.splice(2, 2)).toEqual(['Груша', 'Вишня']);
            expect(array).toEqual(['Яблочка', 'Банан']);

            expect(array.splice(1, 0, 'Апельсинка', 'Груша', 'Вишня')).toEqual([]);
            expect(array).toEqual(['Яблочка', 'Апельсинка', 'Груша', 'Вишня', 'Банан']);

            expect(array.splice(-2, 2)).toEqual(['Вишня', 'Банан']);
            expect(array).toEqual(['Яблочка', 'Апельсинка', 'Груша']);
        });

        it('slice', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан', 'Груша', 'Вишня'];

            expect(array.slice(0, 1)).toEqual(['Апельсинка']);

            expect(array.slice(0, 3)).toEqual(['Апельсинка', 'Яблочка', 'Банан']);

            expect(array).toEqual(['Апельсинка', 'Яблочка', 'Банан', 'Груша', 'Вишня']);

            expect(array.slice(1)).toEqual(['Яблочка', 'Банан', 'Груша', 'Вишня']);

            expect(array.slice(-2)).toEqual(['Груша', 'Вишня']);

            expect(array.slice()).toEqual(array);
        });

        it('sort', function () {
            var array = [7, 2, 3, 0];

            array.sort(function (a, b) {
                return a > b;
            });

            expect(array).toEqual([0, 2, 3, 7]);
        });

        it('reverse', function () {
            var array = [7, 2, 3, 0];

            array.reverse()

            expect(array).toEqual([0, 3, 2, 7]);
        });

        it('concat', function () {
            var array = [1, 2, 3];

            expect(array.concat(4, 5)).toEqual([1, 2, 3, 4, 5]);

            expect(array.concat([4, 5], 6)).toEqual([1, 2, 3, 4, 5, 6]);
            expect(array.concat(4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);

            expect(array).toEqual([1, 2, 3]);
        });

        it('indexOf/lastIndexOf', function () {
            var array = ['Апельсинка', true, 'Яблочка', 'Банан', true, 10];

            expect(array.indexOf('Апельсинка')).toBe(0);
            expect(array.indexOf(true)).toBe(1);
            expect(array.indexOf(true, 2)).toBe(4);

            expect(array.lastIndexOf(true)).toBe(4);
            expect(array.lastIndexOf(true, 3)).toBe(1);
            expect(array.lastIndexOf(10)).toBe(5);
        });

        it('forEach', function () {
            var array = ['Апельсинка', 'Яблочка', 'Банан'],
                spy = jasmine.createSpy('spy');

            // array.forEach = function (callback) {
            //     for (var index = 0; index < this.length; index++) {
            //         callback(this[index], index, this)
            //     }
            // };

            // array.forEach = function (callback) {
            //     for (var index = this.length - 1; index >= 0; index--) {
            //         callback(this[index], index, this)
            //     }
            // };

            array.forEach(spy);

            expect(spy.calls.count()).toBe(3);
            expect(spy).toHaveBeenCalledWith('Апельсинка', 0, array);
            expect(spy).toHaveBeenCalledWith('Яблочка', 1, array);
            expect(spy).toHaveBeenCalledWith('Банан', 2, array);
        });

        it('filter', function () {
            var array = [10, 23, 3, 0, 5, 92],
                newArray;

            newArray = array.filter(function (item/*, index, array*/) {
                return item <= 10;
            });

            expect(newArray).toEqual([10, 3, 0, 5]);
            expect(array).toEqual([10, 23, 3, 0, 5, 92]);
        });

        it('map', function () {
            var array = ['1', '2', '3', '4'],
                newArray;

            newArray = array.map(function (item, index/*, array*/) {
                return parseInt(item) + index;
            });

            expect(newArray).toEqual([1, 3, 5, 7]);
        });

        it('every', function () {
            var array = [10, 22, 11],
                result;

            result = array.every(function (item) {
                return item < 50;
            });

            expect(result).toBeTruthy();

            result = array.every(function (item) {
                return item < 15;
            });

            expect(result).toBeFalsy();
        });

        it('some', function () {
            var array = [10, 22, 11],
                result;

            result = array.some(function (item) {
                return item === 10;
            });

            expect(result).toBeTruthy();

            result = array.some(function (item) {
                return item === 50;
            });

            expect(result).toBeFalsy();
        });

        it('reduce', function () {
            var array = [1, 2, 3, 4, 5, 6],
                spy = jasmine.createSpy('spy'),
                result;

            result = array.reduce(function (previousValue, currentItem/*, index, array*/) {
                var sum = previousValue + currentItem;

                spy(previousValue, currentItem, sum);

                return sum;
            });

            expect(result).toBe(21);

            expect(spy.calls.count()).toBe(5);
            expect(spy).toHaveBeenCalledWith(1, 2, 3);
            expect(spy).toHaveBeenCalledWith(3, 3, 6);
            expect(spy).toHaveBeenCalledWith(6, 4, 10);
            expect(spy).toHaveBeenCalledWith(10, 5, 15);
            expect(spy).toHaveBeenCalledWith(15, 6, 21);
        });
    });

    describe('String.split', function () {
        it('how to use', function () {
            var string = 'Some test string';

            expect(string.split(' ')).toEqual(['Some', 'test', 'string']);
        });

        it('deleteIndentations', function () {
            var testString = '    Some     test     string    ';

            expect(deleteIndentations(testString)).toBe('Some test string');

            function deleteIndentations(string) {
                return string.split(' ').filter(function (item) {
                    return !!item || item === ' ';
                }).join(' ');
            }
        });
    });
});
