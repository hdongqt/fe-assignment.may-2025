import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-4 mt-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Navigation Menu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pr-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/project">Screen 1</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/estimator">Screen 2</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/user-management">Screen 3</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/json-form">A2: JSON form rendering components </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/paginate-table">A3: Paginated component </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
