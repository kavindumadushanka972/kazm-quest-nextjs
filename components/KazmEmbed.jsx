'use client'
import Head from 'next/head';

const KazmEmbed = () => {
  const initializeKazm = () => {
    if (typeof window !== 'undefined' && !window.kazmInitialized) {
      window.kazmInitialized = true;
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@kazm/client-sdk@latest';
      script.onload = () => {
        const kazmSDK = new kazm.KazmSDK();
        kazmSDK.initializeEmbed({
          membershipId: "c85666fe-52ba-4d7b-b50a-4c90949a8f2f",
          elementId: "kazm-form",
          options: {
            formOptions: {
              logo: true,
              headline: true,
              description: true,
              backgroundImage: true
            },
            profileOptions: {
              includeProfile: true,
              currentTier: true,
              nextTier: true,
              quests: true,
              linkToLeaderboard: true
            },
            leaderboardOptions: {
              includeLeaderboard: true,
              quests: true,
              header: true
            }
          }
        });
      };
      document.body.appendChild(script);
    }
  };

  if (typeof window !== 'undefined') {
    initializeKazm();
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0" />
      </Head>
      <div id="kazm-form" className="absolute top-0 left-0 w-full h-full" />
    </>
  );
};

export default KazmEmbed;
