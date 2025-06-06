import { Button } from "./components/ui/button";

export default function App() {
  return (
    <>
      <h1>Hello Page</h1>
      <div className="grid grid-cols-5 gap-4">
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="gshop">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="online">Click me</Button>
      </div>
    </>
  );
}
