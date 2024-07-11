
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001
    },
    "watchEvents": [
        "change",
        "add",
        "unlink",
        "addDir",
        "unlinkDir"
    ],
    "watch": true,
    "ignore": ['node_modules', '.cache', 'scss', 'package.json', 'package-lock.json', '*/**.map'],
    "server": true,
    "port": 3000,
    "codeSync": true,
    "notify": true
};