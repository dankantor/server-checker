ServerChecker.opts.url = ''; // put your server url here
ServerChecker.opts.name = ''; // give your server a recognizable name
ServerChecker.opts.email = ''; // email address you want to be notified at

function onOpen() {
  ServerChecker.buildMenu();
};

function fetch(){
  ServerChecker.fetch();
}

function getDailyAverage(){
  ServerChecker.getDailyAverage();
}

function pruneData(){
  ServerChecker.pruneData();
}

function buildChart(){
  ServerChecker.buildChart();
}

function notify(){
  ServerChecker.notify();
}

function initialize(){
  ServerChecker.initialize();
}
