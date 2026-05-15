import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase'

function App() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('projects')
        .select('id')
        .limit(1)

      if (error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus('Connected to Supabase!');
      }
    }

    testConnection();
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <p>{status}</p>
    </div>
  );
}

export default App;