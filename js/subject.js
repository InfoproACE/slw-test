document.addEventListener('DOMContentLoaded', function () {
    // ดึงข้อมูลจาก Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbwu6Mu2cUZiydUG6ZvD41IsVbPDUIWMdc44miyzgX19F6knX4TlSp4M5g8BeIFJsZ1vxw/exec')
        .then(response => response.json())
        .then(data => {
            // ดึงค่า userClass จากหน้าเว็บ
            const userClass = document.querySelector('#userClass').textContent.trim();

            // หาข้อมูลที่ตรงกับ userClass
            const matchedData = data.find(item => item.userClass === userClass);

            if (matchedData) {
                // ถ้าพบข้อมูลที่ตรงกับ userClass ให้ดึงข้อมูลและแสดงในฟิลด์
                document.querySelector('#nameSubject').textContent = matchedData.nameSubject;
                document.querySelector('#daySubject').textContent = matchedData.daySubject;
                document.querySelector('#timeSubject').textContent = `${matchedData.sTimeSubject} - ${matchedData.fTimeSubject}`;
                
                // แทรกลิงก์เข้าสอบ
                const link = matchedData.link;  // ใช้ examLink จากข้อมูลที่ดึงมา
                document.querySelector('#link').innerHTML = 
                    `<button type="submit" onclick="window.location.href='${link}'">เข้าสอบ</button>`;
            } else {
                // ถ้าไม่พบข้อมูลที่ตรงกัน
                console.log('ไม่พบข้อมูลที่ตรงกับชั้นเรียนที่ระบุ');
            }
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error));
});
