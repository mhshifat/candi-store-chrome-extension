import './global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

function Popup() {
  return (
    <div className="text-3xl font-bold underline">
      <p>Popup..................</p>
    </div>
  )
}

const root = createRoot(document.body);
root.render(<Popup />);