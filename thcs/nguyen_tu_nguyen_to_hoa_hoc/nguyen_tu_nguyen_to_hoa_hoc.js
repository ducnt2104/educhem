const table = document.getElementById("periodic-table");
const atomVisual = document.getElementById("atom-visual");

const details = {
  name: document.getElementById("element-name"),
  symbol: document.getElementById("element-symbol"),
  number: document.getElementById("element-number"),
  mass: document.getElementById("element-mass"),
  protons: document.getElementById("element-protons"),
  neutrons: document.getElementById("element-neutrons"),
  electrons: document.getElementById("element-electrons"),
  application: document.getElementById("element-application"),
  group: document.getElementById("element-group"),
  period: document.getElementById("element-period"),
  electronConfig: document.getElementById("element-electronConfig"),
};

// Hàm render bảng tuần hoàn
function renderTable() {
  elements.forEach((element) => {
    const el = document.createElement("div");
    el.className = "element";
    el.innerHTML = `<div>${element.symbol}</div><div>${element.number}</div>`;
    el.onclick = () => showDetails(element);
    table.appendChild(el);
  });
}

// Hàm hiển thị thông tin chi tiết của nguyên tố
function showDetails(element) {
  details.name.textContent = element.name;
  details.symbol.textContent = element.symbol;
  details.number.textContent = element.number;
  details.mass.textContent = element.mass;
  details.protons.textContent = element.protons;
  details.neutrons.textContent = element.neutrons;
  details.electrons.textContent = element.electrons;
  details.application.textContent = element.application;
  details.group.textContent = element.group;
  details.period.textContent = element.period;
  details.electronConfig.textContent = element.electronConfig;
  renderAtom(element);
}

// Hàm vẽ nguyên tử và electron
function renderAtom(element) {
  atomVisual.innerHTML = ""; // Xóa nội dung cũ

  // Hạt nhân
  const nucleus = document.createElement("div");
  nucleus.style.position = "absolute";
  nucleus.style.top = "50%";
  nucleus.style.left = "50%";
  nucleus.style.transform = "translate(-50%, -50%)";
  nucleus.style.width = "40px";
  nucleus.style.height = "40px";
  nucleus.style.borderRadius = "50%";
  nucleus.style.backgroundColor = "#FFD700";
  nucleus.style.display = "flex";
  nucleus.style.alignItems = "center";
  nucleus.style.justifyContent = "center";
  nucleus.style.fontSize = "12px";
  nucleus.style.fontWeight = "bold";
  nucleus.style.color = "black";
  nucleus.textContent = `${element.protons}+`;
  atomVisual.appendChild(nucleus);

  // Tạo các vòng electron
  const electronConfig = element.electronConfig; // Ví dụ: [2], [2, 6], [2, 8, 1]
  const maxRadius = 120; // Bán kính tối đa
  const radiusStep = 40; // Khoảng cách giữa các vòng

  electronConfig.forEach((electrons, ringIndex) => {
    const radius = radiusStep * (ringIndex + 1);

    // Vẽ vòng
    const ring = document.createElement("div");
    ring.style.position = "absolute";
    ring.style.width = `${radius * 2}px`;
    ring.style.height = `${radius * 2}px`;
    ring.style.border = "1px solid #000";
    ring.style.borderRadius = "50%";
    ring.style.top = "50%";
    ring.style.left = "50%";
    ring.style.transform = "translate(-50%, -50%)";
    atomVisual.appendChild(ring);

    // Vẽ electron
    for (let i = 0; i < electrons; i++) {
      const angle = (i * 360) / electrons;
      const radian = (angle * Math.PI) / 180;
      const electron = document.createElement("div");
      electron.style.position = "absolute";
      electron.style.width = "10px";
      electron.style.height = "10px";
      electron.style.borderRadius = "50%";
      electron.style.backgroundColor = "#2196F3";

      // Tính toán vị trí electron
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      electron.style.top = `calc(50% + ${y}px)`;
      electron.style.left = `calc(50% + ${x}px)`;

      atomVisual.appendChild(electron);
    }
  });
}

// Gọi hàm render bảng tuần hoàn
renderTable();


function renderAtom(element) {
  atomVisual.innerHTML = ""; // Xóa nội dung cũ

  // Hạt nhân
  const nucleus = document.createElement("div");
  nucleus.className = "nucleus";
  nucleus.textContent = `${element.protons}+`; // Hiển thị số proton
  atomVisual.appendChild(nucleus);

  // Tạo các vòng electron
  const electronConfig = element.electronConfig; // Ví dụ: [2], [8], [1]
  const maxRadius = 130; // Bán kính tối đa
  const radiusStep = 30; // Khoảng cách giữa các vòng

  electronConfig.forEach((electrons, ringIndex) => {
      const radius = radiusStep * (ringIndex + 1);

      // Vẽ vòng
      const ring = document.createElement("div");
      ring.className = "ring";
      ring.style.width = `${radius * 2}px`;
      ring.style.height = `${radius * 2}px`;
      atomVisual.appendChild(ring);

      // Vẽ electron
      for (let i = 0; i < electrons; i++) {
          const angle = (i * 360) / electrons; // Góc đặt electron
          const radian = (angle * Math.PI) / 180;
          const electron = document.createElement("div");
          electron.className = "electron";

          // Tính toán vị trí electron
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          electron.style.top = `calc(50% + ${y}px)`;
          electron.style.left = `calc(50% + ${x}px)`;

          atomVisual.appendChild(electron);
      }
  });
}


// Hàm render bảng tuần hoàn
function renderTable() {
  elements.forEach((element) => {
    const el = document.createElement("div");
    el.className = `element group-${element.group}`; // Thêm lớp nhóm
    el.innerHTML = `
      <div>${element.symbol}</div>
      <div style="font-size: 12px; margin-top: 5px;">${element.number}</div>
    `;
    el.onclick = () => showDetails(element);
    table.appendChild(el);
  });
}


function showInfo(info) {
    document.getElementById("info-text").textContent = info;
}

function toggleVisibility(group) {
    const allItems = document.querySelectorAll(".legend-item");
    allItems.forEach(item => {
        if (item !== document.getElementById(group)) {
            item.classList.add("hidden");
        } else {
            item.classList.remove("hidden");
        }
    });
}


// Hiển thị thông tin khi hover vào một màu
function showInfo(info) {
  document.getElementById("info-text").textContent = info;
}

// Hàm ẩn hoặc hiển thị nhóm màu khi nhấn vào
function toggleVisibility(group) {
  const allItems = document.querySelectorAll(".legend-item");
  allItems.forEach(item => {
      if (group === 'all-groups') {
          item.classList.remove("hidden");
      } else if (item.className.includes(group)) {
          item.classList.remove("hidden");
      } else {
          item.classList.add("hidden");
      }
  });
}


