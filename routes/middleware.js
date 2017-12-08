var PythonShell = require('python-shell');

var options = {
    scriptPath: 'python/'
};

var pyshell = []; //array of ALL backend queries - used for displaying query history (not yet implemented)

//this file restricts access to the back end by only allowing front end to access the output of the python backend #IBM-level_security
function get_data(airport) {
    pyshell.push(new PythonShell('base.py', options));

    send_pyshell(airport);
}

function get_extended_data(airport) {
    pyshell.push(new PythonShell('extended.py', options));
    send_pyshell(airport);
}

function send_pyshell(airport) {

    pyshell[pyshell.length - 1].send(airport);
    pyshell[pyshell.length - 1].send("python/");

}

module.exports = {'get_data': get_data, 'get_extended_data': get_extended_data, 'pyshell': pyshell};
