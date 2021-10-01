import React, {useEffect} from 'react'

export const Message = () => {
  useEffect(() => {
    const mouseMove = () => {
      console.log(':D');
    }
    window.addEventListener('mousemove',mouseMove);
    return () => {
      window.removeEventListener('mousemove',mouseMove );
    }
  }, [])
  return (
    <div>
      <h3>eres genial</h3>
    </div>
  )
}
 