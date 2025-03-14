import React from 'react';
import PersistentDrawer from '../compoment/PersistentDrawer';
import CompositionExample from '../compoment/Gauge';
import { Stack } from '@mui/material';
import BasicStacking from '../compoment/BasicStacking';

function App() {
  return (
    <div> 
      <PersistentDrawer />
     <Stack direction={'row'}  sx={{marginLeft: '20rem'}}>
       <Stack sx={{bgcolor: " red"}}>
        <CompositionExample/>
        </Stack>
        <BasicStacking/>
     </Stack>
</div>
  );
}

export default App;
