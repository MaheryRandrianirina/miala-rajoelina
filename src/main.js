import './style.css'

function updateCountdown() {
  const now = new Date()
  const currentYear = now.getFullYear()
  const nextYear = currentYear + 1
  const currentMonth = now.getMonth()
  const currentDay = now.getDate()
  const newYear = new Date(nextYear, currentMonth, currentDay, 0, 0, 0)
  
  const timeDiff = newYear - now
  
  if (timeDiff <= 0) {
    document.getElementById('days').textContent = '0'
    document.getElementById('hours').textContent = '0'
    document.getElementById('minutes').textContent = '0'
    document.getElementById('seconds').textContent = '0'
    return
  }
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
  
  document.getElementById('days').textContent = days
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0')
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0')
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0')
}

// Update countdown immediately
updateCountdown()

// Update countdown every second
setInterval(updateCountdown, 1000)
