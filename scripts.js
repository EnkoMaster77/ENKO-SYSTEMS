// ✅ 1. กำหนดรายชื่อผู้ใช้ที่สามารถเข้าสู่ระบบได้
const users = [
  { username: "admin", password: "1234", role: "admin" },
  { username: "user1", password: "5678", role: "user" }
];

// ✅ 2. ฟังก์ชันเมื่อกดปุ่มเข้าสู่ระบบ
function login() {
  // ดึงค่าจากช่องกรอก username และ password
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const alertBox = document.getElementById("loginAlert");

  // ค้นหาผู้ใช้ที่ตรงกับข้อมูลที่กรอก
  const found = users.find(person => person.username === u && person.password === p);

  if (found) {
    // ถ้าเจอ → เก็บข้อมูลไว้ใน localStorage แล้วไปหน้า dashboard
    localStorage.setItem("enkoLoggedIn", "true");
    localStorage.setItem("enkoUsername", found.username);
    localStorage.setItem("enkoRole", found.role);
    window.location.href = "dashboard.html";
  } else {
    // ถ้าไม่เจอ → แสดงข้อความเตือนว่า login ไม่ผ่าน
    alertBox.classList.remove("hidden");
    alertBox.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
}

// ✅ 3. ฟังก์ชันออกจากระบบ
function logout() {
  localStorage.clear(); // เคลียร์ข้อมูล login
  window.location.href = "index.html"; // กลับไปหน้า login
}

// ✅ 4. ฟังก์ชันสำหรับเปลี่ยนหน้า
function goTo(page) {
  window.location.href = page; // เช่น goTo('purchase.html')
}

// ✅ 5. ฟังก์ชันแสดงชื่อผู้ใช้และบทบาท (ใช้ใน dashboard)
function showUserInfo() {
  const name = localStorage.getItem("enkoUsername");
  const role = localStorage.getItem("enkoRole");

  const nameBox = document.getElementById("displayUser");
  const roleBox = document.getElementById("displayRole");

  if (nameBox) nameBox.textContent = name;
  if (roleBox) roleBox.textContent = role;
}

// ✅ 6. ฟังก์ชันตรวจสอบว่าผู้ใช้ login อยู่ไหม (ใช้กับทุกหน้า)
function checkLogin() {
  const loggedIn = localStorage.getItem("enkoLoggedIn");
  if (loggedIn !== "true") {
    alert("กรุณาเข้าสู่ระบบก่อน");
    window.location.href = "index.html";
  }
}

// ✳️ เรียก showUserInfo อัตโนมัติเมื่อโหลดหน้า dashboard
window.onload = function () {
  // ถ้า element ที่ใช้แสดงชื่อผู้ใช้มีอยู่ → แสดงข้อมูลได้เลย
  if (document.getElementById("displayUser")) {
    showUserInfo();
  }

  // ถ้าต้องการบังคับให้ login ก่อนเข้า → ใช้ checkLogin()
  checkLogin();
};

