import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Home, Menu, MyClubs, Achieves, CreateClub, About, Login, ClubDetails, AddTask } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();

    const storedIsuNumber = sessionStorage.getItem('isuNumber');
    const storedConsent = sessionStorage.getItem('consentGiven');
    if (storedIsuNumber && storedConsent === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleLoginSuccess = (isuNumber, newUserId) => {
    localStorage.setItem('isuNumber', isuNumber);
    localStorage.setItem('consentGiven', 'true');
    setIsAuthorized(true);
    setUserId(newUserId);
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={isAuthorized ? activePanel : 'login'}>
          <Login id="login" onLoginSuccess={handleLoginSuccess} fetchedUser={fetchedUser} />
          <Home id="home" fetchedUser={fetchedUser} />
          <Menu id="menu" fetchedUser={fetchedUser} />
          <MyClubs id="myclubs" userId={userId} />
          <Achieves id="achieves" />
          <CreateClub id="createclub" />
          <About id="about" />
          <ClubDetails id="clubdetails" />
          <AddTask id="addtask" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};