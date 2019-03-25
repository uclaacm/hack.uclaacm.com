module.exports = {
  'hooks': {
    /* you can skip git hooks with --no-verify flag */
    /* but make sure you know absolutely what you are doing */
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run lint',
  },
};
