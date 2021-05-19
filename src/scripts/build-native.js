const { exec } = require('child_process');
const semver = require('semver');

exec('tns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`tns --version err: ${err}`);
        return;
    }

    // In case the current Node.js version is not supported by CLI, a warning in `tns --version` output is shown.
    // Sample output:
    //
    /*Support for Node.js ^8.0.0 is deprecated and will be removed in one of the next releases of NativeScript. Please, upgrade to the latest Node.js LTS version.

    6.0.0
    */
    console.log(`executing 'tns plugin build'`);
    exec('tns plugin build', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log(`${err}`);
            return;
        }
    });
});
