import { PureComponentDemo, PureComponentFuncDemo } from "./PureComponentDemo";

export default function PureComponentDemoPage() {
  return (
    <div>
      <h1>Pure Component Demo</h1>
      <PureComponentDemo name="AAAA" />
      <PureComponentFuncDemo name="BBBB" />
    </div>
  );
}
