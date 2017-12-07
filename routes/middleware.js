var PythonShell = require('python-shell');

var options = {
    scriptPath: 'python/'
};

var pyshell = []; //array of ALL backend queries - used for displaying query history

//this file restricts access to the back end by only allowing front end to access the output of the python backend #IBM-level_security
function get_data(airport) {
    pyshell.push(new PythonShell('base.py', options));

    pyshell[pyshell.length - 1].send(airport);

}

module.exports = {'get_data': get_data, 'pyshell': pyshell};
