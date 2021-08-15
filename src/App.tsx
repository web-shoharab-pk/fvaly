import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/common/Header';

function App(): any {
  return (
    <>
      <AppRouter>
        <Header />
      </AppRouter>
    </>
  );
}

export default App;
