// ข้อมูลจำลอง: ยอดขายและต้นทุนรายเดือน
const monthlyStats = {
  orders: 120,
  sales: 85,
  totalValue: 58000,
  cost: 30500,
};

// ข้อมูลวัสดุรีไซเคิลในรูปแบบสัดส่วน (Pie Chart)
const materialBreakdown = {
  labels: ["ทองแดง", "อลูมิเนียม", "พลาสติก", "กระดาษ"],
  data: [35, 25, 20, 20],
};

// ข้อมูลยอดขายรายวัน (Bar Chart)
const dailySales = Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000) + 1000);

// รายการล่าสุด 5 รายการ
const recentItems = [
  { name: "ทองแดง", amount: "12 กก.", price: 1200, date: "15 ก.ค." },
  { name: "พลาสติก", amount: "18 กก.", price: 650, date: "14 ก.ค." },
  { name: "กระดาษ", amount: "7 กก.", price: 250, date: "13 ก.ค." },
  { name: "อลูมิเนียม", amount: "5 กก.", price: 430, date: "13 ก.ค." },
  { name: "ทองแดง", amount: "4 กก.", price: 390, date: "12 ก.ค." },
];

// 🟩 อัปเดตการ์ดสรุปยอด
function updateSummaryCards() {
  const netIncome = monthlyStats.totalValue - monthlyStats.cost;

  const cards = document.querySelectorAll(".card");
  cards[0].querySelector("p").textContent = `${monthlyStats.orders} รายการ`;
  cards[1].querySelector("p").textContent = `${monthlyStats.sales} รายการ`;
  cards[2].querySelector("p").textContent = `฿${monthlyStats.totalValue.toLocaleString()}`;
  cards[3].querySelector("p").textContent = `฿${netIncome.toLocaleString()}`;
}

// 🥧 วาดกราฟวัสดุรีไซเคิล
function renderPieChart() {
  const ctx = document.getElementById("pieChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: materialBreakdown.labels,
      datasets: [{
        data: materialBreakdown.data,
        backgroundColor: ["#e17055", "#0984e3", "#00b894", "#fdcb6e"]
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "ประเภทวัสดุรีไซเคิล" },
        legend: { position: "bottom" }
      }
    }
  });
}

// 📊 วาดกราฟยอดขายรายวัน
function renderBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  const labels = Array.from({ length: 30 }, (_, i) => `วันที่ ${i + 1}`);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "ยอดขาย (บาท)",
        data: dailySales,
        backgroundColor: "#00b894"
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "ยอดขายรายวัน (1 เดือน)" }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// 📋 สร้างตารางรายการล่าสุด
function renderRecentItems() {
  const container = document.getElementById("recentList");
  let html = `<table><thead><tr><th>ชื่อวัสดุ</th><th>ปริมาณ</th><th>ราคา</th><th>วันที่</th></tr></thead><tbody>`;

  recentItems.forEach(item => {
    html += `<tr>
      <td>${item.name}</td>
      <td>${item.amount}</td>
      <td>฿${item.price.toLocaleString()}</td>
      <td>${item.date}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

// 🚀 โหลดทุกฟังก์ชันเมื่อหน้าโหลด
window.addEventListener("DOMContentLoaded", () => {
  updateSummaryCards();
  renderPieChart();
  renderBarChart();
  renderRecentItems();
});


