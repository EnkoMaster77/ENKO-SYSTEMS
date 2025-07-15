// 📌 แสดง Modal ถ้ายังไม่ได้ล็อกอิน
window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    showLoginModal("กรุณาเข้าสู่ระบบก่อน");
  }
});

// 🧠 ฟังก์ชันเปิด Modal และใส่ข้อความ
function showLoginModal(message) {
  const modal = document.getElementById("loginModal");
  const messageBox = document.getElementById("loginMessage");

  if (modal && messageBox) {
    messageBox.textContent = message;
    modal.style.display = "flex";
  } else {
    console.warn("ไม่พบ modal หรือองค์ประกอบข้อความ");
  }
}

// ❌ ปิด Modal (เมื่อกดปุ่มตกลง)
function closeModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ✅ ล็อกอินเมื่อผู้ใช้กดปุ่ม
function login() {
  sessionStorage.setItem("isLoggedIn", "true");

  // ปิด Modal ถ้ายังเปิดอยู่
  closeModal();

  // แจ้งผู้ใช้หรือรีเฟรชหน้า
  alert("เข้าสู่ระบบสำเร็จ!");
}

