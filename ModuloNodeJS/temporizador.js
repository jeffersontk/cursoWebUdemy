const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 03 * * 1", function() {
  console.log("executando tarefa 1!", new Date().getSeconds());
});

setTimeout(() => {
  tarefa1.cancel();
  console.log("cancenlando tarefa 1");
}, 20000);

const regra = new schedule.RecurrenceRule();

regra.dayOfWeek = new schedule.Range(1, 5);
regra.hour = 03;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log("Executando tarefa 2", new Date().getSeconds());
});
