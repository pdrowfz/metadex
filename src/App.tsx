import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-5">
      <h1 className="text-4xl font-bold">MetaDex</h1>
      <Button
        onClick={() => setShowComingSoon((previousValue) => !previousValue)}
      >
        Coming Soon?
      </Button>
      {showComingSoon && <h2 className="text-2xl font-bold">Coming Soon!</h2>}
    </div>
  );
}

export default App;
