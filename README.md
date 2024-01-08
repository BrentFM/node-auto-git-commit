# auto_commit

## Usage:

- **commit.js (All files)**: This script automates the process of adding and committing changes in your repository. It runs `git add .` followed by `git commit` with an auto-generated message.
- **commit2.js (Individual / Specific files)**: This script is for committing already staged changes. It only runs `git commit` with an auto-generated message. Make sure to run `git add <file_name>` for the specific files you want to commit before using this script.

The general commit message format is "Auto-commit: Updated # files". You can modify this message by editing the `generateCommitMessage` function in both scripts.

## Notes:

- The scripts assume that you are running them from the root of your git repository.
- Ensure to test these scripts in a safe environment first to make sure they behave as expected, especially if your project is critical.
- Disclaimer: I am not liable for any issues, data loss, or other problems that may arise from the use of these scripts. Please use them at your own risk.
