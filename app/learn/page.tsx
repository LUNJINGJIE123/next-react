'use client'

import { useRef } from "react";
import { type ChildHandle } from "./child";
import useStore from "@/stores";
import React from "react";
const Child = React.lazy(() => import("./child"));
const LazyCom = React.lazy(() => import("./lazy"));

const LearnPage: React.FC = () => {
  const { increment } = useStore();
  const childRef = useRef<ChildHandle | null>(null);

  const handleClick = (from: string) => {
    console.log('click from：', from);
  }

  return (
    <div>
      is my child: 
      <React.Suspense fallback={<div>loading...</div>}>
        <Child name="chil111d" handleClick={handleClick} ref={childRef} />
      </React.Suspense>
      <div>
        <button onClick={() => childRef.current?.sayHello()}>获取child暴露的方法</button>
      </div>
      <div>
        <button onClick={() => increment()}>increment</button>
      </div>
      <div>
        <React.Suspense fallback={<div>Lazy loading...</div>}>
          <LazyCom />
        </React.Suspense>
      </div>
    </div>
  );
}

export default LearnPage;