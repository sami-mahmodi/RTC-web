'use client'
import React from 'react'
import {Affix,Button} from 'antd'




function Popup() {
    const [bottom, setBottom] = React.useState(100);
  return (
  <>
   <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
  </>
   
  )
}

export default Popup