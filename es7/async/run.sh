#!/bin/sh
npm install babel-plugin-transform-async-to-generator
babel-node --use_strict  async.js
babel-node --use_strict  await.js
