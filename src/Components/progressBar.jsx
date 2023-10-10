'use client';

import { Progress } from 'flowbite-react';

export default function ProgressBarColors() {
  return (
    <div className="flex flex-col gap-2">
      
     

      <Progress
        color="yellow"
        progress={45}
      />
      <div className='flex flex-row justify-between'>
<span className='neon-font'>Beginner level</span>
<span className='neon-font'>Intermediate level</span>
<span className='neon-font'>high level</span>
      </div>
      
    </div>
  )
}


