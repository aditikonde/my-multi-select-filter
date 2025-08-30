import React from 'react';
import MultiSelectFilterPanel from './components/MultiSelectFilterPanel';

export const App: React.FunctionComponent = () => {
  return (
    <div className='min-h-screen p-6 sm:p-12'>
      <div className='max-w-xl mx-auto space-y-6'>
        <header className='space-y-1'>
          <h1 className='text-2xl sm:text-3xl font-semibold tracking-tight'>
            Multi-Select Filter
          </h1>
          <p className='italic text-sm text-gray-600'>
            Helps you search, filter and select through a large dataset
          </p>
        </header>
        <section className='p-4 sm:p-6 rounded-lg border shadow-lg border-zinc-200'>
          <MultiSelectFilterPanel />
        </section>
      </div>
    </div>
  );
};

export default App;
