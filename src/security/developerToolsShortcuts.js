const DEVTOOLS_KEYS = new Set(['i', 'j', 'c']);

export function isDeveloperToolsShortcut(event) {
  const key = event.key?.toLowerCase();

  if (key === 'f12') {
    return true;
  }

  if (
    DEVTOOLS_KEYS.has(key) &&
    ((event.ctrlKey && event.shiftKey) || (event.metaKey && event.altKey))
  ) {
    return true;
  }

  return (
    key === 'u' &&
    ((event.ctrlKey && !event.altKey && !event.shiftKey) ||
      (event.metaKey && event.altKey && !event.shiftKey))
  );
}
