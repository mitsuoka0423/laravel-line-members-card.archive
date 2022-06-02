import { useEffect, useState } from 'react';
import { Page } from './components/page';
import { Card } from './components/card';
// TODO: カッコよくhooksにしたい
// import { useProfile } from './hooks';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import './App.css';

const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';
const liffId = import.meta.env.VITE_LIFF_ID;
const redirectUri = import.meta.env.VITE_LIFF_REDIRECT_URI;

if (isMockMode) {
  console.log('mock mode');
  liff.use(new LiffMockPlugin());
}

function App() {
  const [error, setError] = useState('');
  // TODO: any を駆逐する
  // Profile は /node_modules/@liff/get-profile/lib/index.d.ts にあるけど、exportされてない？
  const [profile, setProfile] = useState<any>();

  // TODO: hooksにしたい
  // 少なくともasync/awaitで書きたい
  useEffect(() => {
    liff
      .init({
        liffId,
        mock: isMockMode,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri });
        }
        liff.getProfile().then((profile) => {
          console.log({ profile });
          setProfile(profile);
        });
      })
      .catch((e: Error) => {
        setError(`${e}`);
      });
  }, []);

  return (
    <div className="App">
      {error ? error : <Page><Card userId={profile?.userId}></Card></Page>}
    </div>
  );
}

export default App;
