#!/usr/bin/env node

const clipboardy = require('clipboardy');
const slackifyMarkdown = require('slackify-markdown');

clipboardy.writeSync(slackifyMarkdown(clipboardy.readSync()));
