const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

module.exports = {
  default: {
    tags: args.tags || process.env.npm_config_TAGS || '',
    formatOptions: {},
    snippetInterface: 'async-await',
    paths: ['./Feature/'],
    dryRun: false,
    require: [
      './Step/**/*.ts',
      './playwrightwrapper.ts'
    ],
    requireModule: [
      'ts-node/register',
      'tsconfig-paths/register'
    ],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      'rerun:@rerun'
    ],
    parallel: 1
  },
  rerun: {
    formatOptions: {},
    snippetInterface: 'async-await',
    dryRun: false,
    require: [
      './Step/**/*.ts',
      './playwrightwrapper.ts'
    ],
    requireModule: [
      'ts-node/register',
      'tsconfig-paths/register'
    ],
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      'rerun:@rerun'
    ],
    parallel: 2
  }
};
