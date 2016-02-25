exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        var count = start;

        function setTimer() {
            count += 1;
            if (count < end)
                setInterval(setTimer, 100);
        }
        setTimer();
    }
};
