import { useBarcode } from 'react-barcodes';

interface CardPropsInterface {
    userId: string;
};

export const Card = (props: CardPropsInterface) => {
    // TODO: liff.init後に取得できるUserIDを入れたい
    const { inputRef } = useBarcode({ value: props.userId });

    return <svg ref={inputRef} />;
};
