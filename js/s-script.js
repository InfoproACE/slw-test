async function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbydSf_NuzVVN1YtcFJ6CvPCFVPJ8U0ErYXr6q5v7b4xkBeqvMWS7tsO9Qcd0ldckGF8/exec");
        const students = await response.json();

        const student = students.find(t => t.username === username);

        if (student) {
            sessionStorage.setItem("loggedInUser", JSON.stringify(student));
            window.location.href = "dashboard.html";  // เปลี่ยนไปยังหน้า dashboard
        } else {
            document.getElementById("error").textContent = "ชื่อรหัสนักเรียนไม่ถูกต้อง";
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);
    }
}
