var PythonShell = require('python-shell');

var options = {
    scriptPath: 'python/'
};
var pyshell = new PythonShell('base.py', options);
function get_data(airport) {

    pyshell.send(airport);

}
module.exports = {'get_data': get_data, 'pyshell': pyshell};

