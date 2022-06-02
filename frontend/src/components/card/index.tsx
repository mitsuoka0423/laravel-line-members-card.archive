import { AspectRatio, Box, Skeleton } from '@chakra-ui/react';
import { Barcode } from '../barcode';

interface CardPropsInterface {
  userId?: string;
}

export const Card = (props: CardPropsInterface) => {
  return (
    <AspectRatio ratio={1.618 / 1}>
      <Box boxShadow="base" borderRadius="20px">
        {props.userId ? (
          <Barcode id={props.userId}></Barcode>
        ) : (
          <Skeleton width="50%" height="100px"></Skeleton>
        )}
      </Box>
    </AspectRatio>
  );
};
