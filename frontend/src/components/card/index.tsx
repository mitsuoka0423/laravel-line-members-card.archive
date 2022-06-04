import { useEffect, useState } from 'react';
import { AspectRatio, Box, Skeleton } from '@chakra-ui/react';
import { Barcode } from '../barcode';
import { useMember } from './hooks';

interface CardPropsInterface {
  userId: string;
}

export const Card = (props: CardPropsInterface) => {
  const [barcodeId, setBarcodeId] = useState('');

  useEffect(() => {
    useMember(props.userId).then((member) => {
      console.log({member});
      setBarcodeId(member.barcode_id);
    });
  }, ['userId']);

  return (
    <AspectRatio ratio={1.618 / 1}>
      <Box boxShadow="base" borderRadius="20px">
        {barcodeId ? (
          <Barcode id={barcodeId}></Barcode>
        ) : (
          <Skeleton width="50%" height="100px"></Skeleton>
        )}
      </Box>
    </AspectRatio>
  );
};
