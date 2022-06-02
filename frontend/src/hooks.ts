import liff from '@line/liff';

interface UseProfilePropsInterface {
  liffId: string;
}

export const useProfile = async (
  props: UseProfilePropsInterface
  // TODO: any を駆逐する
  // /node_modules/@liff/get-profile/lib/index.d.ts にあるけど、exportされてない？
): Promise<any> => {
  // ): Promise<Profile> => {
  try {
    await init(props.liffId);
    return await liff.getProfile();
  } catch (e) {
    throw e;
  }
};

export const useIdToken = async (props: UseProfilePropsInterface) => {
  try {
    await init(props.liffId);
    return await liff.getIDToken();
  } catch (e) {
    throw e;
  }
};

const init = async (liffId: string) => {
  return liff.init({
    liffId,
  });
};
