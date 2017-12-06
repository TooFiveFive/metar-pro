var PythonShell = require('python-shell');

var options = {
    scriptPath: 'python/'
};

var pyshell = [];


function get_data(airport) {
    pyshell.push(new PythonShell('base.py', options));

    pyshell[pyshell.length - 1].send(airport);

}

module.exports = {'get_data': get_data, 'pyshell': pyshell};
