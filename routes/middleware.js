var PythonShell = require('python-shell');

var options = {
    scriptPath: 'python/'
};

var pyshell = [];


function get_data(airport) {
    pyshell.push(new PythonShell('base.py', options));

    pyshell[pyshell.length - 1].send(airport);

    pyshell[pyshell.length - 1].end(function (err) {
        if (err) {
            console.log(err);
            pyshell[pyshell.length - 1] = null;
        }
        console.log('finished');
    });

}

module.exports = {'get_data': get_data, 'pyshell': pyshell};
