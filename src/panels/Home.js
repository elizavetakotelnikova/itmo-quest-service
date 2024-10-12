import React from 'react';
import { Panel, PanelHeader, Group, Cell, Div, Header, Button, SplitLayout, SplitCol, View, Text, Subhead } from '@vkontakte/vkui';
import { Icon28CancelCircleOutline, Icon28DoneOutline, Icon28ChevronRightCircleOutline } from '@vkontakte/icons';
import PropTypes from 'prop-types';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const Home = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();

  const goToMenu = () => {
    routeNavigator.push('/menu');
  };

  return (
      <SplitLayout style={{ justifyContent: 'center' }} modal={null}>
        <SplitCol>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>
                Главная
              </PanelHeader>

              <Group>
                <Div style={{ textAlign: 'center' }}>
                  <Button mode="primary" size="l" onClick={goToMenu}>
                    Здравствуйте, {fetchedUser?.first_name} {fetchedUser?.last_name}!
                  </Button>
                </Div>
              </Group>

              <Group header={<Header mode="primary">Активные задания</Header>}>
                <Cell
                    after={(
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Subhead weight="regular" style={{ marginRight: 10, color: '#999', fontSize: '12px' }}>Аниме-клуб "Котацу"</Subhead>
                          <Subhead weight="regular" style={{ marginRight: 10, fontSize: '12px' }}>Кронверкский пр-кт, д. 49, Ауд. 228</Subhead>
                          <Icon28DoneOutline />
                        </div>
                    )}
                >
                  <Text weight="medium" style={{ fontSize: '15px' }}>Посмотреть вместе с нами 100 серий Наруто.</Text>
                </Cell>

                <Cell
                    after={(
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Subhead weight="regular" style={{ marginRight: 10, color: '#999', fontSize: '12px' }}>Музыкальный клуб "Живой Звук"</Subhead>
                          <Subhead weight="regular" style={{ marginRight: 10, fontSize: '12px' }}>ул. Ломоносова, д. 49, Ауд. 1415</Subhead>
                          <Icon28ChevronRightCircleOutline />
                        </div>
                    )}
                >
                  <Text weight="medium" style={{ fontSize: '15px' }}>Помочь перетащить ударную установку с Ломоносова на Гриву.</Text>
                </Cell>

                <Cell
                    after={(
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Subhead weight="regular" style={{ marginRight: 10, color: '#999', fontSize: '12px' }}>Клуб любителей Лепса</Subhead>
                          <Subhead weight="regular" style={{ marginRight: 10, fontSize: '12px' }}>ул. Ломоносова, д. 49, Ауд. 1418</Subhead>
                          <Icon28CancelCircleOutline />
                        </div>
                    )}
                >
                  <Text weight="medium" style={{ fontSize: '15px' }}>Спеть 'Самый лучший день' не закусывая.</Text>
                </Cell>
                <Div>
                  <Button mode="secondary" size="l" stretched>Отобразить ещё</Button>
                </Div>
              </Group>

              <Group header={<Header mode="primary">Ближайшие мероприятия</Header>}>
                <Cell
                    description="Купить Питерскую ватрушку в столовке Ломо."
                    after={(
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Subhead weight="regular" style={{ marginRight: 10, color: '#999', fontSize: '12px' }}>Университет ИТМО</Subhead>
                          <Subhead weight="regular" style={{ marginRight: 10, fontSize: '12px' }}>Кронверкский пр-кт, д. 49, Ауд. 228</Subhead>
                        </div>
                    )}
                >
                  <Text weight="medium" style={{ fontSize: '15px' }}>Купить Питерскую ватрушку в столовке Ломо.</Text>
                </Cell>

                <Cell
                    description="Конкурс наименее скользящей домашней плитки."
                    after={(
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Subhead weight="regular" style={{ marginRight: 10, color: '#999', fontSize: '12px' }}>Клуб любителей плитки в ванной</Subhead>
                          <Subhead weight="regular" style={{ marginRight: 10, fontSize: '12px' }}>Кронверкский пр-кт, д. 49, Ауд. 228</Subhead>
                        </div>
                    )}
                >
                  <Text weight="medium" style={{ fontSize: '15px' }}>Конкурс наименее скользящей домашней плитки.</Text>
                </Cell>
                <Div>
                  <Button mode="secondary" size="l" stretched>Отобразить ещё</Button>
                </Div>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
};