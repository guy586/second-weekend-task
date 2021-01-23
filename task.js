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
// Start of table (below).
document.write("<table>");
// Head of the table.
document.write("<tr>");
for (let prop in tasks[0]) {
   switch (prop) {
      case 'startedAt':
         document.write("<th>Started At</th>");
         break;
      case 'finishedAt':
         document.write("<th>Finished At</th>");
         break;
      case 'tasksGiven':
         document.write("<th>Tasks Given</th>");
         break;
      case 'tasksFinished':
         document.write("<th>Tasks Finished</th>");
         break;    
      case 'topic':
         document.write("<th>Topic</th>");
         break;
      case 'totalTime':
         document.write("<th>Total Time Spent</th>");
         break;
      case 'tasksFinishedPercent':
         document.write("<th>Tasks Finished %</th>");
         break; 
   }
}
document.write("</tr>");
// Table content.
for (let obj of tasks) {
   document.write("<tr>");
   for (let prop in obj) {
      switch (prop) {
         case 'startedAt':
            let min = obj[prop].getMinutes();
            if (min === 0) {
               min = "00";
            }
            document.write(`<td>${obj[prop].getHours()}:${min}</td>`);
            break;
         case 'finishedAt':
            let minute = obj[prop].getMinutes();
            if (minute === 0) {
               minute = "00";
            }
            document.write(`<td>${obj[prop].getHours()}:${minute}</td>`);
            break;
         case 'tasksGiven':
            document.write(`<td>${obj[prop]}</td>`);
            break;
         case 'tasksFinished':
            document.write(`<td>${obj[prop]}</td>`);
            break;    
         case 'topic':
            document.write(`<td>${obj[prop]}</td>`);
            break;
         case 'totalTime':
            if (obj[prop] <= 4) {
               document.write(`<td class="fast">${obj[prop]}</td>`);    
            } else if (4 < obj[prop] && obj[prop] <= 6) {
                document.write(`<td class="mid">${obj[prop]}</td>`);
            } else if (6 < obj[prop]) {
                document.write(`<td class="low">${obj[prop]}</td>`);
            }
            break;
         case 'tasksFinishedPercent':
            if (obj[prop] <= 50) {
               document.write(`<td class="bad">${obj[prop]}%</td>`);    
            } else if (50 < obj[prop] && obj[prop] <= 75) {
                document.write(`<td class="avg">${obj[prop]}%</td>`);
            } else if (75 < obj[prop]) {
                document.write(`<td class="good">${obj[prop]}%</td>`);
            }
            break;
      } 
   }
   document.write("</tr>");
}
document.write("</table>");
// End of table (above).