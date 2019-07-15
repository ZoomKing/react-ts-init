import React, {useCallback, useEffect,useState} from 'react';
// import About from '@/pages/About';


let mount: any;
function useForceUpdate() {
  const [_, forceUpdate] = useState(0);
  console.log(_)
  return () => forceUpdate(x => x + 1);
}

function UnmountTest() {
  useEffect(() => {
    if (!mount) {
      mount = true;
      console.log('did mount')
    } else {
      console.log('did update')
    }
    return () => {
      mount = false;
      console.log('unmount')
    }
  })
  const forceUpdate = useForceUpdate();
  return (<div>
    我是随时被抛弃的
    {/* <About /> */}
    <button onClick={forceUpdate}>强制更新</button>
  </div>);
}

export default function State() {
  const [count, setCount] = useState(20);

  const handleCount = useCallback(() => {
    setCount(count => count + 1)
  }, [])
  return (
    <div>
      {count}
      <button onClick={handleCount}>count+1</button>
      {(count % 2) && <UnmountTest />}
    </div>
  )
}