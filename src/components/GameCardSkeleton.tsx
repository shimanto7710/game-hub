import { Card, CardBody, Skeleton } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card.Root>
  );
};
