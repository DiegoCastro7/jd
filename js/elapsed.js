
    //const targetDate = new Date('2022-11-17T21:35:00');
    //const timeLeft = currentDate - targetDate;

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    function daysInMonth(year, month) {
        const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === 1 && isLeapYear(year)) {
            return 29; // Febrero en año bisiesto
        }
        return monthLengths[month];
    }
    
    function calculateElapsedTime(startDate) {
        const currentDate = new Date();
    
        let years = currentDate.getFullYear() - startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const currentMonth = currentDate.getMonth();
    
        if ((currentMonth < startMonth) || (currentMonth === startMonth && currentDate.getDate() < startDate.getDate())) {
            years--;
        }
    
        let months = (currentDate.getMonth() - startDate.getMonth() + 12) % 12;
        let days = currentDate.getDate() - startDate.getDate();
    
        if (days < 0) {
            months--;
            days += daysInMonth(startDate.getFullYear(), startDate.getMonth());
        }
    
        let hours = currentDate.getHours() - startDate.getHours();
        let minutes = currentDate.getMinutes() - startDate.getMinutes();
        let seconds = currentDate.getSeconds() - startDate.getSeconds();
    
        if (seconds < 0) {
            minutes--;
            seconds += 60;
        }
        if (minutes < 0) {
            hours--;
            minutes += 60;
        }
        if (hours < 0) {
            days--;
            hours += 24;
        }
        if (days < 0) {
            months--;
            days += daysInMonth(currentDate.getFullYear(), (currentDate.getMonth() - 1 + 12) % 12);
        }
        if (months < 0) {
            years--;
            months += 12;
        }
    
        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
    
    function updateElapsedTime() {
        const startDate = new Date('2022-11-17T21:35:00'); // Fecha de inicio
    
        const elapsedTime = calculateElapsedTime(startDate);
    
        document.getElementById('years').textContent = elapsedTime.years;
        document.getElementById('months').textContent = elapsedTime.months;
        document.getElementById('days').textContent = elapsedTime.days;
        document.getElementById('hours').textContent = elapsedTime.hours;
        document.getElementById('minutes').textContent = elapsedTime.minutes;
        document.getElementById('seconds').textContent = elapsedTime.seconds;
    }
    
    updateElapsedTime();
    setInterval(updateElapsedTime, 1000);
    