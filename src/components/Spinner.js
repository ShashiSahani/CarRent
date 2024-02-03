import React from 'react'
import { Spin} from 'antd'
export const img='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBjYXJzfGVufDB8fDB8fHww'
function Spinner() {
  return (
    <div className='spinner'>
        <Spin size='large'/>
      
    </div>
  )
}

export default Spinner
