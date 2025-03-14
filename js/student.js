document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) {
        window.location.href = "login";  // หากไม่มีผู้ใช้ล็อกอินอยู่ ให้กลับไปหน้า login
    } else {
        document.getElementById("userProfile").textContent = `${user.firstName} ${user.lastName}`;
        document.getElementById("userClass").textContent = `${user.sClass}/${user.noClass}`;
    }
});

function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
