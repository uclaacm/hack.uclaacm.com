module.exports = {
	hooks: {
		// you can skip git hooks with --no-verify flag
		// but make sure you know what you are doing
		'pre-commit': 'yarn lint',
		'pre-push': 'yarn lint'
	}
};
