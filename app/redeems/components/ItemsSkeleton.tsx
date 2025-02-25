import { Skeleton } from "@mui/material";

function ItemsSkeleton({ numberOfItems = 1 }: { numberOfItems?: number }) {
  return (
    <>
      {[...Array(numberOfItems)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          height={336}
          width={294}
          animation="wave"
        />
      ))}
    </>
  );
}

export default ItemsSkeleton;
