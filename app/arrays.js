exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        var sum = 0;
        arr.forEach(function (item) {
            sum += item;
        });
        return sum;
    },

    remove: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i--, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i--, 1);
            }
        }
        return arr;
    },

    append: function (arr, item) {
        return arr.concat(item);
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail: function (arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        var count = 0, index = 0;
        while (arr.indexOf(item, index) != -1) {
            count += 1;
            index = arr.indexOf(item, index) + 1;
        }
        return count;
    },

    duplicates: function (arr) {
        var duplicates = [], temp = arr, length = arr.length;
        for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                if (arr[i] === arr[j] && duplicates.indexOf(arr[i]) == -1) {
                    duplicates.push(arr[i]);
                    break;
                }
            }
        }
        return duplicates;
    },

    square: function (arr) {
        var newArr = [];
        arr.map(function (item) {
            newArr.push(item * item);
        });
        return newArr;
    },

    findAllOccurrences: function (arr, target) {
        var occ = [], index = 0;
        while (arr.indexOf(target, index) != -1) {
            occ.push(arr.indexOf(target, index));
            index = arr.indexOf(target, index) + 1;
        }
        return occ;
    }
};
