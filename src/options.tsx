import './global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

function Options() {
  return (
    <div className="text-3xl font-bold underline">
      <p>Options</p>
    </div>
  )
}

const root = createRoot(document.body);
root.render(<Options />);