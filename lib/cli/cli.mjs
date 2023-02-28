#!/usr/bin/env node
/* eslint-disable space-before-function-paren */
import { cpSync } from 'fs'
import { execSync } from 'child_process'

const LIBRARY_PATH = './node_modules/koa-inversify'
const TEMPLATES_PATH = `${LIBRARY_PATH}/template`

async function run() {
  copyFiles()
  updatePkgJson()
  await installPackages()
}

async function installPackages() {
  const packages = ['inversify', 'reflect-metadata', 'koa-inversify']
  const devPackages = ['typescript', 'ts-node', '@types/koa']
  execSync(`npm i ${packages.join(' ')}`, { stdio: 'inherit' })
  execSync(`npm i --save-dev ${devPackages.join(' ')}`, { stdio: 'inherit' })
}

function copyFiles() {
  cpSync(TEMPLATES_PATH, process.cwd(), { recursive: true })
}

function updatePkgJson() {
  execSync(
    'npm pkg set "scripts.start:dev"="node -r ts-node/register -r reflect-metadata ./src/index.ts"'
  )
}

run()
