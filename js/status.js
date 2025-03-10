document.addEventListener("DOMContentLoaded", function () {
    function checkExamStatus() {
        const nameSubject = document.querySelector("#nameSubject").value.trim();
        const daySubject = document.querySelector("#daySubject").value.trim();
        const timeSubject = document.querySelector("#timeSubject").value.trim();
        const status = document.querySelector("#status");

        if (!nameSubject || !daySubject || !timeSubject) {
            status.textContent = "ไม่มีการสอบ";
            status.style.color = "red";
        } else {
            status.textContent = "มีการสอบ";
            status.style.color = "green";
        }
    }

    document.querySelector("#nameSubject").addEventListener("input", checkExamStatus);
    document.querySelector("#daySubject").addEventListener("input", checkExamStatus);
    document.querySelector("#timeSubject").addEventListener("input", checkExamStatus);

    checkExamStatus(); // ตรวจสอบสถานะเริ่มต้นเมื่อโหลดหน้าเว็บ
});
