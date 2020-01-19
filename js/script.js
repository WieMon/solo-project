/*Chart*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
            label: 'Signups',
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [280, 150, 200, 280, 350, 330, 320, 180, 250, 270]
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [300, 140, 240, 220, 370, 100, 150, 200, 400, 280],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
          hidden: true,
        }]
    },

    // Configuration options go here
    options: {
   
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  stepSize: 100,
                  min: 0,
                  max: 600,
              },
              gridLines: {
                display:false
            }
          }],
          xAxes: [{
            ticks: {
              thickLength: 0,
            }
          }]
      },
      legend: {
       display: false,
      }
    
  }
});

/*Sidebar*/

let sideMenu = document.querySelector('#menu');
let navMenu = document.querySelector('#nav-menu');
//console.log('navMenu', navMenu);
//console.log('navMenu', navMenu);

window.addEventListener('resize', function(){
  if (window.screen.width < 767) {
  sideMenu.classList.add('collapse');
  sideMenu.classList.add('position-over');
  //sideMenu.classList.add('position-opacity');
  //navMenu.classList.add('position-over-nav');
  navMenu.classList.add('navigation-mobile');
  console.log('I am small');
  
} else {
    sideMenu.classList.remove('collapse');
    sideMenu.classList.remove('position-over');
    //sideMenu.classList.remove('position-opacity');
    //navMenu.classList.remove('position-over-nav');
    navMenu.classList.remove('navigation-mobile');
    console.log('I am big');
  }
});

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('collapse', visible)
}
function toggleNav(visible) {
  if (window.screen.width < 767) {
  document.querySelector('.navigation').classList.toggle('navigation-mobile-bottom', visible)
  }
}

/*function toggleNav() {
  document.querySelector('.navigation').classList.toggle('nav-mobile-click')
}*/

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  toggleNav();
  console.log('click');
  //console.log('toggleNav');
});