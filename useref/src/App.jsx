import { useRef, useEffect ,useState} from "react";


// export default function App() {
//   const countRef = useRef(0);

//   useEffect(() => {
//     countRef.current += 1; 
//     console.log("Component rendered, countRef:", countRef.current);
//   });

//   return <div>Check the console</div>;
// }




// export default function Example() {
//   const countRef = useRef(0);

//   console.log("Component rendered", countRef.current);

//   return (
//     <button onClick={() => (countRef.current += 1)}>
//       Increment Ref (Check Console)
//     </button>
//   );
// }


// export default function Example() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);
//   console.log("Component rendered", countRef.current);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>State: {count}</button>
//       <button onClick={() => (countRef.current += 1)}>Ref (Check Console)</button>
//     </div>
//   );
// }

// Here’s a simple summary:  

// - `useRef` gives you an object with a `.current` property that you can change.  
// - Unlike `useState`, changing `.current` does not trigger a re-render.  
// - This happens because React does not track changes to `useRef` like it does with state.  
// - The `useRef` object stays the same between renders, so it’s great for storing values that should persist without causing extra updates.  

// Think of `useRef` like a box that keeps a value safe between renders, but React doesn’t look inside unless you tell it to. 😊