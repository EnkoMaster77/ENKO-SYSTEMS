// ข้อมูลจำลองสำหรับ 1 เดือน
const summaryData = {
  orders: 120,
  sales: 85,
  totalValue: 58000,
  cost: 30500, // ต้นทุนรวม
};

// คำนวณรายได้สุทธิ
const netIncome = summaryData.totalValue - summaryData.cost;

// แสดงข้อมูลสรุปยอด
document.querySelectorAll(".card")[0].querySelector("p").textContent = `${summaryData.orders} รายการ`;
document.querySelectorAll(".card")[1].querySelector("p").textContent = `${summaryData.sales} รายการ`;
document.querySelectorAll(".card")[2].querySelector("p").textContent = `฿${summaryData.totalValue.toLocaleString()}`;
document.querySelectorAll(".card")[3].querySelector("p").textContent = `฿${netIncome.toLocaleString()}`;

// ข้อมูลกราฟวงกลม: สัดส่วนวัสดุรีไซเคิล
const pieCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieCtx, {
  type: "doughnut",
  data: {
    labels: ["ทองแดง", "อลูมิเนียม", "พลาสติก", "กระดาษ"],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ["#e17055", "#0984e3", "#00b894", "#fdcb6e"],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "ประเภทวัสดุรีไซเคิล" }
    }
  }
});

// ข้อมูลกราฟแท่ง: ยอดขายรายวันใน 1 เดือน
const barCtx = document.getElementById("barChart").getContext("2d");
const days = Array.from({ length: 30 }, (_, i) => `วันที่ ${i + 1}`);
const salesData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 3000) + 1000);

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: days,
    datasets: [{
      label: "ยอดขาย (บาท)",
      data: salesData,
      backgroundColor: "#00b894"
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      title: { display: true, text: "ยอดขายรายวัน (1 เดือน)" }
    }
  }
});

