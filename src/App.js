import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Home, Menu, MyClubs, Achieves, CreateClub, About, Login } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();

    const storedIsuNumber = localStorage.getItem('isuNumber');
    const storedConsent = localStorage.getItem('consentGiven');
    if (storedIsuNumber && storedConsent === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleLoginSuccess = (isuNumber) => {
    localStorage.setItem('isuNumber', isuNumber);
    localStorage.setItem('consentGiven', 'true');
    setIsAuthorized(true);
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={isAuthorized ? activePanel : 'login'}>
          <Login id="login" onLoginSuccess={handleLoginSuccess} />
          <Home id="home" fetchedUser={fetchedUser} />
          <Menu id="menu" fetchedUser={fetchedUser} />
          <MyClubs id="myclubs" />
          <Achieves id="achieves" />
          <CreateClub id="createclub" />
          <About id="about" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
