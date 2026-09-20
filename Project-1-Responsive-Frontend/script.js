const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const taskChecks = document.querySelectorAll(".task-check");
const doneCount = document.getElementById("doneCount");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("resetBtn");
const dateText = document.getElementById("dateText");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
  });
});

function updateTaskCount() {
  let completed = 0;

  taskChecks.forEach(function (checkbox) {
    const card = checkbox.closest(".task-card");

    if (checkbox.checked) {
      completed += 1;
      card.classList.add("completed");
    } else {
      card.classList.remove("completed");
    }
  });

  doneCount.textContent = completed;
  totalCount.textContent = taskChecks.length;
}

taskChecks.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateTaskCount);
});

resetBtn.addEventListener("click", function () {
  taskChecks.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  updateTaskCount();
});

const today = new Date();

dateText.textContent = today.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long"
});

updateTaskCount();
