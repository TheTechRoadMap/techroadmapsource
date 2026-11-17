import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { isDeveloperToolsShortcut } from './developerToolsShortcuts.js';

export default function DeveloperToolsDeterrent() {
  const [detected, setDetected] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!import.meta.env.PROD) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (!isDeveloperToolsShortcut(event)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      setDetected(true);
    }

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  useEffect(() => {
    if (!detected) {
      return undefined;
    }

    const appRoot = document.getElementById('root');
    const previousInert = appRoot?.inert;
    const previousAriaHidden = appRoot?.getAttribute('aria-hidden');

    if (appRoot) {
      appRoot.inert = true;
      appRoot.setAttribute('aria-hidden', 'true');
    }

    dialogRef.current?.focus();

    return () => {
      if (appRoot) {
        appRoot.inert = previousInert;
        if (previousAriaHidden === null) {
          appRoot.removeAttribute('aria-hidden');
        } else {
          appRoot.setAttribute('aria-hidden', previousAriaHidden);
        }
      }
    };
  }, [detected]);

  if (!detected) {
    return null;
  }

  return createPortal(
    <div
      aria-describedby="developer-tools-message"
      aria-labelledby="developer-tools-title"
      aria-modal="true"
      className="developer-tools-overlay"
      ref={dialogRef}
      role="alertdialog"
      tabIndex={-1}
    >
      <div className="developer-tools-overlay__message">
        <h1 id="developer-tools-title">What are you doing here?</h1>
        <p id="developer-tools-message">
          Developer tools access detected.
        </p>
        <p>Reload this page to continue browsing TechRoadMap.</p>
      </div>
    </div>,
    document.body,
  );
}
