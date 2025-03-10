dayjs.extend(dayjs_plugin_buddhistEra);
dayjs.locale('th');

function formatThaiDate(date) {
    return `วัน${date.format('dddd')} ที่ ${date.format('D')} ${date.format('MMMM')} พ.ศ. ${date.format('BBBB')}`;
}

function formatThaiTime(time) {
    return `${time.format('HH:mm:ss')} น.`;
}

function updateDateTime() {
    const now = dayjs();
    document.getElementById('days').innerText = formatThaiDate(now);
    document.getElementById('time').innerText = formatThaiTime(now);
}

updateDateTime(); // แสดงผลครั้งแรก
setInterval(updateDateTime, 1000); // อัปเดตเวลาแบบเรียลไทม์ทุกวินาที
