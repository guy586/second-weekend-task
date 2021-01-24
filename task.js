let tasks = [
   {
       startedAt: new Date("2021-01-10:15:00"),
       finishedAt: new Date("2021-01-10:19:00"),
       tasksGiven: 35,
       tasksFinished: 35,
       topic: 'HTML'   
   },
   {
       startedAt: new Date("2021-01-11:16:00"),
       finishedAt: new Date("2021-01-11:18:30"),
       tasksGiven: 10,
       tasksFinished: 8,
       topic: 'HTML'   
   },
   {
       startedAt: new Date("2021-01-12:14:00"),
       finishedAt: new Date("2021-01-12:20:00"),
       tasksGiven: 12,
       tasksFinished: 7,
       topic: 'CSS'   
   },
   {
       startedAt: new Date("2021-01-13:16:00"),
       finishedAt: new Date("2021-01-13:17:00"),
       tasksGiven: 10,
       tasksFinished: 0,
       topic: 'GitHub'   
   },
   {
       startedAt: new Date("2021-01-14:13:00"),
       finishedAt: new Date("2021-01-14:20:00"),
       tasksGiven: 16,
       tasksFinished: 16,
       topic: 'CSS'   
   },
   {
       startedAt: new Date("2021-01-17:13:00"),
       finishedAt: new Date("2021-01-17:17:00"),
       tasksGiven: 55,
       tasksFinished: 47,
       topic: 'JavaScript'   
   },
   {
       startedAt: new Date("2021-01-18:14:00"),
       finishedAt: new Date("2021-01-18:19:30"),
       tasksGiven: 10,
       tasksFinished: 7,
       topic: 'Conditions'   
   },
   {
       startedAt: new Date("2021-01-19:15:30"),
       finishedAt: new Date("2021-01-19:19:00"),
       tasksGiven: 22,
       tasksFinished: 15,
       topic: 'Loops'   
   },
   {
       startedAt: new Date("2021-01-20:13:00"),
       finishedAt: new Date("2021-01-20:23:30"),
       tasksGiven: 12,
       tasksFinished: 10,
       topic: 'Arrays'   
   },
   {
       startedAt: new Date("2021-01-21:15:00"),
       finishedAt: new Date("2021-01-21:19:00"),
       tasksGiven: 6,
       tasksFinished: 5,
       topic: 'Objects'   
   }
]
// Loop that adding the properties "totalTime" & "tasksFinishedPercent" to each object.
for (let obj of tasks) {
   obj.totalTime = totalTime(obj['startedAt'],obj['finishedAt']);
   obj.tasksFinishedPercent = tasksFinishedPercent(obj['tasksGiven'],obj['tasksFinished']);
}
// Function that calculate the difference between finished time to started time.
function totalTime(start, end) {
   let startTime = start.getHours()*60 + start.getMinutes();
   let endTime = end.getHours()*60 + end.getMinutes();
   let totalTime = (endTime - startTime)/60;
   return totalTime;
}
// Function that calculate the percent of tasks finished, floored.
function tasksFinishedPercent(total, finished) {
   return Math.floor(finished/(total/100));
}
// Start of table.
const body = document.querySelector('body');
const tasksTable = document.createElement('table');
// Head of the table.
const tableHeadRow = document.createElement('tr');
for (let prop in tasks[0]) {
   const headline = document.createElement('th');
   switch (prop) {
      case 'startedAt':
         headline.innerText = 'Started At';
         break;
      case 'finishedAt':
         headline.innerText = 'Finished At';
         break;
      case 'tasksGiven':
         headline.innerText = 'Tasks Given';
         break;
      case 'tasksFinished':
         headline.innerText = 'Tasks Finished';
         break;    
      case 'topic':
         headline.innerText = 'Topic';
         break;
      case 'totalTime':
         headline.innerText = 'Total Time Spent';
         break;
      case 'tasksFinishedPercent':
         headline.innerText = 'Tasks Finished %';
   }
   tableHeadRow.appendChild(headline);
}
tasksTable.appendChild(tableHeadRow);

// Table content.
for (let obj of tasks) {
   const tableRow = document.createElement('tr');
   for (let prop in obj) {
      const td = document.createElement('td');
      switch (prop) {
         case 'startedAt':
            let min = obj[prop].getMinutes();
            if (min === 0) {
               min = "00";
            }
            td.append(obj[prop].getHours(),':',min);
            break;
         case 'finishedAt':
            let minute = obj[prop].getMinutes();
            if (minute === 0) {
               minute = "00";
            }
            td.append(obj[prop].getHours(),':',minute);
            break;
         case 'tasksGiven':
            td.append(obj[prop]);
            break;
         case 'tasksFinished':
            td.append(obj[prop]);
            break;    
         case 'topic':
            td.append(obj[prop]);
            break;
         case 'totalTime':
            if (obj[prop] <= 4) {
               td.setAttribute('class', 'fast');
               td.append(obj[prop]);    
            } else if (4 < obj[prop] && obj[prop] <= 6) {
               td.setAttribute('class', 'mid');
               td.append(obj[prop]);
            } else if (6 < obj[prop]) {
               td.setAttribute('class', 'low');
               td.append(obj[prop]);
            }
            break;
         case 'tasksFinishedPercent':
            if (obj[prop] <= 50) {
               td.setAttribute('class', 'bad');
               td.append(obj[prop]);   
            } else if (50 < obj[prop] && obj[prop] <= 75) {
               td.setAttribute('class', 'avg');
               td.append(obj[prop]);
            } else if (75 < obj[prop]) {
               td.setAttribute('class', 'good');
               td.append(obj[prop]);
            }
      }
      tableRow.appendChild(td); 
   }
   tasksTable.appendChild(tableRow);
}
body.appendChild(tasksTable);