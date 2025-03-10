document.addEventListener("DOMContentLoaded", function () {
    function checkExamStatus() {
        const nameSubjectEl = document.querySelector("#nameSubject");
        const daySubjectEl = document.querySelector("#daySubject");
        const timeSubjectEl = document.querySelector("#timeSubject");
        const status = document.querySelector("#status");

        if (!nameSubjectEl || !daySubjectEl || !timeSubjectEl || !status) {
            console.error("ไม่พบ element ที่ต้องการใน DOM");
            return;
        }

        // ใช้ textContent แทน value สำหรับ span
        const nameSubject = nameSubjectEl.textContent.trim();
        const daySubject = daySubjectEl.value?.trim(); // daySubject และ timeSubject ยังคงเป็น input
        const timeSubject = timeSubjectEl.value?.trim();

        if (!nameSubject || !daySubject || !timeSubject) {
            status.textContent = "ไม่มีการสอบ";
            status.style.color = "red";
        } else {
            status.textContent = "มีการสอบ";
            status.style.color = "green";
        }
    }

    // ตรวจสอบเฉพาะ input ที่เปลี่ยนค่า
    document.querySelector("#daySubject")?.addEventListener("input", checkExamStatus);
    document.querySelector("#timeSubject")?.addEventListener("input", checkExamStatus);

    // ถ้า nameSubject อาจเปลี่ยนค่าแบบไดนามิก (เช่น อัปเดตผ่าน JavaScript)
    const observer = new MutationObserver(checkExamStatus);
    observer.observe(document.querySelector("#nameSubject"), { childList: true, subtree: true });

    checkExamStatus(); // ตรวจสอบสถานะเริ่มต้นเมื่อโหลดหน้าเว็บ
});
