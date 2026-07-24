#!/usr/bin/env node
// check-sync — verify hooks/konseputo-instructions.js has not drifted from the
// skill files it summarizes. Checks a small set of anchor phrases exist in
// BOTH the compact ruleset (injected by hooks) and the corresponding SKILL.md
// / reference doc (read on demand). Not a full-text diff — a lightweight
// tripwire (ponytail check-rule-copies pattern).
//
// Usage: node scripts/check-sync.js
// Exit 0: all anchors present on both sides. Exit 1: prints named misses.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let instructions;
try {
  instructions = require(path.join(ROOT, 'hooks', 'konseputo-instructions.js'));
} catch (e) {
  console.error('check-sync: hooks/konseputo-instructions.js not found');
  process.exit(1);
}

const ANCHORS = [
  { id: 'backend:ladder', phrase: 'ladder', ruleset: instructions.backendRuleset('medium'), skillFile: 'skills/konseputo-backend/SKILL.md' },
  { id: 'backend:baseline', phrase: 'baseline', ruleset: instructions.backendRuleset('medium'), skillFile: 'skills/konseputo-backend/SKILL.md' },
  { id: 'backend:carve-out', phrase: 'carve-out', ruleset: instructions.backendRuleset('medium'), skillFile: 'skills/konseputo-backend/SKILL.md' },
  { id: 'frontend:register', phrase: 'register', ruleset: instructions.frontendRuleset('medium'), skillFile: 'skills/konseputo-frontend/SKILL.md' },
  { id: 'frontend:brand', phrase: 'brand', ruleset: instructions.frontendRuleset('medium'), skillFile: 'skills/konseputo-frontend/SKILL.md' },
  { id: 'frontend:phosphor', phrase: 'phosphor', ruleset: instructions.frontendRuleset('medium'), skillFile: 'skills/konseputo-frontend/SKILL.md' },
  { id: 'communication:caveman', phrase: 'caveman', ruleset: instructions.communicationRuleset(), skillFile: 'shared/communication.md' },
  { id: 'communication:ru-speech', phrase: 'живая', ruleset: instructions.communicationRuleset(), skillFile: 'shared/communication.md' },
];

function has(text, phrase) {
  return String(text || '').toLowerCase().includes(phrase.toLowerCase());
}

function readSkill(relPath) {
  try {
    return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  } catch (e) {
    return null; // missing file — reported as a miss below
  }
}

function main() {
  const misses = [];

  for (const anchor of ANCHORS) {
    const inInstructions = has(anchor.ruleset, anchor.phrase);
    const skillText = readSkill(anchor.skillFile);
    const inSkill = skillText !== null && has(skillText, anchor.phrase);

    if (!inInstructions) {
      misses.push(anchor.id + ': phrase "' + anchor.phrase + '" missing from hooks/konseputo-instructions.js');
    }
    if (skillText === null) {
      misses.push(anchor.id + ': ' + anchor.skillFile + ' not found');
    } else if (!inSkill) {
      misses.push(anchor.id + ': phrase "' + anchor.phrase + '" missing from ' + anchor.skillFile);
    }
  }

  if (misses.length > 0) {
    console.error('check-sync: ' + misses.length + ' miss(es):');
    for (const m of misses) console.error('  - ' + m);
    process.exit(1);
  }

  console.log('check-sync: ' + ANCHORS.length + '/' + ANCHORS.length + ' anchors in sync.');
  process.exit(0);
}

main();
