const { exec } = require('child_process');

function generateCommitMessage(files) {
    const fileCount = files.length;
    return `Auto-commit: Updated ${fileCount} files`;
}

function commitChanges(message) {
    exec(`git commit -m "${message}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Git Commit Successful: ${stdout}`);
    });
}

// Get staged files
exec('git diff --name-only --staged', (diffError, diffStdout, diffStderr) => {
    if (diffError) {
        console.error(`Error: ${diffError.message}`);
        return;
    }
    if (diffStderr) {
        console.error(`Stderr: ${diffStderr}`);
        return;
    }

    const files = diffStdout.split('\n').filter(Boolean);
    if (files.length === 0) {
        console.log('No files to commit.');
        return;
    }
    const commitMessage = generateCommitMessage(files);
    commitChanges(commitMessage);
});