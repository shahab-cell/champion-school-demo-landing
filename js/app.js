const btnShow = document.querySelector('.toggle')
const crossBtn = document.querySelector('#cross')
const sideMenu = document.querySelector('.side-menu')
let enroll = document.querySelector('#enroll')
const showMenu = () => {
  sideMenu.classList.add('show-menu')
}

const closeMenu = () => {
  sideMenu.classList.remove('show-menu')
}

btnShow.addEventListener('click', showMenu)
crossBtn.addEventListener('click', closeMenu)

// function animateEnrollmentCount(targetCount, duration) {
//   let currentCount = 0
//   const increment = Math.ceil(targetCount / (duration / 02)) // increment count by a fraction of the target count every 10 milliseconds
//   const intervalId = setInterval(() => {
//     currentCount += increment
//     enroll.textContent = currentCount + '+'
//     if (currentCount >= targetCount) {
//       clearInterval(intervalId)
//     }
//   }, 02)
// }

// // Call animateEnrollmentCount with the target count (2000) and the desired duration in milliseconds (5000):
// animateEnrollmentCount(2000, 1000)
