var sys = require('util')
var exec = require('child_process').exec
function puts(error, stdout, stderr) { 
    if  (!stdout || /^\s*$/.test(stdout)) {
        alert("Vuota")
    } else { 
        alert(stdout)
    } 
}
exec('ping -n 1 -4 -w 100 10.130.96.220 | findstr "Risposta"', puts)

