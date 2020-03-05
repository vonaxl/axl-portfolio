//select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial state of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

var colors = {
  primaryColor: "black",
  secondaryColor: "#25b0e7"
};

// chart js
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: [
      "HTML",
      "CSS",
      "Javascript",
      "JQuery",
      "MySQL",
      "Php",
      "Laravel",
      "VueJs"
    ],
    datasets: [
      {
        label: "Conoscenza",
        backgroundColor: colors.secondaryColor,
        borderColor: "white",
        borderWidth: 1,
        data: [85, 83, 75, 77, 73, 70, 72, 65]
      }
    ]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property

        fontColor: "white"
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
            fontColor: "white"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white"
          }
        }
      ]
    }
  }
});
