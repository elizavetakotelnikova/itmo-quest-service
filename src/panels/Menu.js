import React, { useState } from 'react';
import { Panel, PanelHeader, Group, Cell, Avatar, Div, Button, Switch, Header } from '@vkontakte/vkui';
import { Icon28UserOutline, Icon28CupOutline, Icon28AddCircleOutline, Icon28InfoOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';

export const Menu = ({ id, fetchedUser }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const routeNavigator = useRouteNavigator();

    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const goToMyClubs = () => {
        routeNavigator.push('/myclubs');
    };

    const goToAchievements = () => {
        routeNavigator.push('/achieves');
    };

    const goToCreateClub = () => {
        routeNavigator.push('/createclub');
    };

    const goToAbout = () => {
        routeNavigator.push('/about');
    };

    const goBack = () => {
        routeNavigator.back();
    };


    return (
        <Panel id={id}>
            <PanelHeader>Личный кабинет</PanelHeader>

            <Group>
                <Div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size={72} src={fetchedUser?.photo_100} />
                    <Div style={{ paddingLeft: 16 }}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>
                            {fetchedUser?.first_name} {fetchedUser?.last_name}
                        </div>
                        <div style={{ color: 'gray' }}>
                            {fetchedUser?.city?.title || 'Город не указан'}
                        </div>
                    </Div>
                </Div>
            </Group>

            <Group header={<Header mode="secondary">Уведомления</Header>}>
                <Cell
                    after={<Switch checked={notificationsEnabled} onChange={toggleNotifications} />}
                >
                    Уведомления о новых заданиях
                </Cell>
            </Group>

            <Group>
                <Cell before={<Icon28UserOutline />} expandable onClick={goToMyClubs}>
                    Мои клубы
                </Cell>
                <Cell before={<Icon28CupOutline />} expandable onClick={goToAchievements}>
                    Достижения
                </Cell>
                <Cell before={<Icon28AddCircleOutline />} expandable onClick={goToCreateClub}>
                    Создать клуб
                </Cell>
                <Cell before={<Icon28InfoOutline />} expandable onClick={goToAbout}>
                    О приложении
                </Cell>
            </Group>

            <Div>
                <Button size="l" stretched mode="secondary" onClick={goBack}>
                    Назад
                </Button>
            </Div>
        </Panel>
    );
};

Menu.propTypes = {
    id: PropTypes.string.isRequired,
    fetchedUser: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
        photo_100: PropTypes.string,
    }),
};
