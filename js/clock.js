function updateClock() {
    const timeEl = document.querySelector("#time");
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// อัปเดตทุกวินาที
setInterval(updateClock, 1000);

// เรียกใช้งานครั้งแรกทันทีที่โหลด
updateClock();
