import { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';

function App() {
  const [answer, setAnswer] = useState('');

  return (
    <Box className="App">
      <TextField
        label="What do you want to learn"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert(answer);
        }}
      >
        Generate
      </Button>
    </Box>
  );
}

export default App;
