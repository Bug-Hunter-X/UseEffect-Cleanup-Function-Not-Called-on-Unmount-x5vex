```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeoutId = setTimeout(() => {
      console.log('Mounted!');
      return () => {
        clearTimeout(timeoutId);
        console.log('Unmounted!');
      };
    }, 0);
    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    return () => {
      if(isMounted) {
        console.log('Component will unmount');
      }
    }
  }, [isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```