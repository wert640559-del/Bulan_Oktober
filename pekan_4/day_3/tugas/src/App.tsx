import { Counter } from './features/counter/Counter';
import { Users } from './features/users/Users';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <Counter />
          <Users />
        </div>
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Open Redux DevTools to inspect state changes and actions</p>
        </div>
      </div>
    </div>
  );
}

export default App;
