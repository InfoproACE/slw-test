
        // ใช้ setTimeout() เพื่อหน่วงเวลา 7 วินาที
        setTimeout(function() {
            // ตัวอย่างค่าของ nameSubject
            var nameSubject = document.getElementById("nameSubject").innerText;

            // ตรวจสอบว่า nameSubject มีข้อมูลหรือไม่
            var status = document.getElementById("status");

            if (nameSubject.trim() === "") {
                status.textContent = "ไม่มีการสอบ";
                status.style.color = "red";
            } else {
                status.textContent = "มีการสอบ";
                status.style.color = "green";
            }
        }, 7000); // หน่วงเวลา 7000 มิลลิวินาที (7 วินาที)
