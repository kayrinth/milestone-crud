import { Skeleton } from "@/components/atoms/skeleton";
import { Card, CardContent } from "@/components/atoms/card";

export default function ProductCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-6 w-1/3" />
      </CardContent>
    </Card>
  );
}
