
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleTryForFree = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Finsya Visual</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Create professional finance visuals and videos in one click!
        </p>
        <Button 
          onClick={handleTryForFree}
          className="bg-[#FA5003] hover:bg-[#E8440A] text-white px-8 py-3 text-lg"
        >
          Try it for free
        </Button>
      </div>
    </div>
  );
};

export default Index;
