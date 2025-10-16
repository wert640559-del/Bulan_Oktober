import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle() {
  const counter = useCounter();          // return object: { count, increment, decrement, reset }
  const [isOn, toggle] = useToggle();    // return array: [value, toggle]

  // gabungkan hasil dua hook
  return {
    ...counter,  // spread semua dari useCounter
    isOn,
    toggle,
  };
}
