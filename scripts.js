// 🔐 สร้างรายชื่อผู้ใช้ที่สามารถเข้าสู่ระบบได้
const users = [
  { username: "admin", password: "1234", role: "admin" },
  { username: "user1", password: "5678", role: "user" }
];

// 🧠 ฟังก์ชัน login ที่จะถูกเรียกจาก index.html
function login() {
  // ดึงค่าที่กรอกจาก input
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const alertBox = document.getElementById("loginAlert");

  // ตรวจสอบว่ามีผู้ใช้ตรงกับที่กรอกหรือไม่
  const found = users.find(person => person.username === u && person.password === p);

  if (found) {
    // ✅ ถ้าเจอ: เก็บข้อมูลไว้ใน localStorage แล้วไปหน้า dashboard
    localStorage.setItem("enkoLoggedIn", "true");
    localStorage.setItem("enkoUsername", found.username);
    localStorage.setItem("enkoRole", found.role);
    window.location.href = "dashboard.html";
  } else {
    // ❌ ถ้าไม่เจอ: แสดงข้อความแจ้งเตือน
    alertBox.classList.remove("hidden");
    alertBox.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
}

