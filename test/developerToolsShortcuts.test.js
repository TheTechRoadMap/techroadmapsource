import assert from 'node:assert/strict';
import test from 'node:test';
import { isDeveloperToolsShortcut } from '../src/security/developerToolsShortcuts.js';

const shortcut = (key, modifiers = {}) =>
  isDeveloperToolsShortcut({
    key,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    altKey: false,
    ...modifiers,
  });

test('detects F12 and Windows/Linux developer-tools shortcuts', () => {
  assert.equal(shortcut('F12'), true);
  for (const key of ['i', 'J', 'c']) {
    assert.equal(shortcut(key, { ctrlKey: true, shiftKey: true }), true);
  }
  assert.equal(shortcut('u', { ctrlKey: true }), true);
});

test('detects macOS developer-tools and view-source shortcuts', () => {
  for (const key of ['I', 'j', 'C']) {
    assert.equal(shortcut(key, { metaKey: true, altKey: true, shiftKey: true }), true);
  }
  assert.equal(shortcut('u', { metaKey: true, altKey: true }), true);
});

test('does not treat ordinary typing or unrelated modifier combinations as shortcuts', () => {
  assert.equal(shortcut('i'), false);
  assert.equal(shortcut('c', { ctrlKey: true }), false);
  assert.equal(shortcut('u', { ctrlKey: true, shiftKey: true }), false);
  assert.equal(shortcut('j', { metaKey: true, shiftKey: true }), false);
});
