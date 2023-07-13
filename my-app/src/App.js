import React from 'react';


function App() {
    return (
        <div className="App">
            <TitleComponent />
        </div>
    );
}

function TitleComponent() {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1 style={{ marginTop: '-500px' }}>IBM Design Thinking Toolkit for Microsoft</h1>
      </div>
  );
}

export default App;
