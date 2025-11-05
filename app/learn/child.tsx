import { forwardRef, useImperativeHandle } from "react";
import useStore from "@/stores";

interface PropType {
  name: string,
  handleClick: (from: string) => void,
}

export type ChildHandle = { sayHello: () => void };

const Child = forwardRef<ChildHandle, PropType>((props, ref) => {
  const { count } = useStore();
  const sayHello = () => {
    console.log('hello parent');
  };

  useImperativeHandle(ref, () => ({
    sayHello,
  }));

  return (
    <div>
      <button style={{ color: 'red', border: '1px solid red' }} onClick={() => props.handleClick('child')}>click me</button>
      <div>state change from parent(zustand): {count}</div>
    </div>
  );
});

Child.displayName = 'Child';

export default Child;