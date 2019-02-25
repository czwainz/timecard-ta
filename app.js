let week1 = [
  {
    name: 'M',
    hours: 0
  },
  {
    name: 'T',
    hours: 0
  },
  {
    name: 'W',
    hours: 0
  },
  {
    name: 'Th',
    hours: 0
  },
  {
    name: 'F',
    hours: 0
  }
]
let week2 = [
  {
    name: 'M',
    hours: 0
  },
  {
    name: 'T',
    hours: 0
  },
  {
    name: 'W',
    hours: 0
  },
  {
    name: 'Th',
    hours: 0
  },
  {
    name: 'F',
    hours: 0
  }
]

function drawCal1() {
  let template = ''
  for (let i = 0; i < week1.length; i++) {
    let day = week1[i];
    template += `
      <div class="col-2 align-items-center flex-column card mx-2 py-1">
        <h1>${day.name}</h1>
        <button class="btn btn-warning btn-circle" onclick="addHours1('${i}')">+</button>
        <h3>${day.hours}</h3>
        <button class="btn btn-danger btn-circle" onclick="deleteHours1('${i}')">-</button>
      </div>
      `
    document.querySelector('.calendar').innerHTML = template
  }
}
function drawCal2() {
  let template = ''
  for (let i = 0; i < week2.length; i++) {
    let day = week2[i];
    template += `
      <div class="col-2 justify-content-center d-flex card mx-2 py-1">
        <h1>${day.name}</h1>
        <button class="btn btn-warning btn-circle" onclick="addHours()">+</button>
        <h3>${day.hours}</h3>
        <button class="btn btn-danger btn-circle" onclick="deleteHours()">-</button>
      </div>
      `
    document.querySelector('.calendar2').innerHTML = template
  }
}

drawCal1()
// drawCal2()


function addHours1(index) {
  if (week1[index].hours >= 24) {
    document.querySelector('.message').innerHTML = `Cannot have more
      than 24 hours.`
  } else {
    document.querySelector('.message').innerHTML = ` `
    week1[index].hours += 1
  }
  drawCal1()
  totalWeek1()
}

function deleteHours1(index) {
  if (week1[index].hours <= 0) {
    document.querySelector('.message').innerHTML = `Cannot have less
      than 0 hours.`
  } else {
    document.querySelector('.message').innerHTML = ` `
    week1[index].hours -= 1
  }
  drawCal1()
  totalWeek1()
}

let total1 = 0

function totalWeek1() {
  for (let i = 0; i < week1.length; i++) {
    let hours = week1[i];
    total1 += hours.hours * 25
    document.querySelector('#totalHours').innerHTML = `${hours.hours}`
  }
  document.querySelector('#totalCheck').innerHTML = `${total1}`
  drawCal1()

}
totalWeek1()

