import React, { useState, useEffect } from 'react';
import { Panel, PanelHeader, Group, Cell, Avatar, Div, Button, Text, Separator } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { getClubDetails } from '../api/requests/requests.js';

export const ClubDetails = ({ id, clubId }) => {
    const routeNavigator = useRouteNavigator();
    const [club, setClub] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubDetails = async () => {
            try {
                const data = await getClubDetails(clubId);
                setClub(data);
            } catch (error) {
                console.error('Ошибка при получении данных клуба:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClubDetails();
    }, [clubId]);

    const goBack = () => {
        routeNavigator.back();
    };

    const goToAddTask = () => {
        routeNavigator.push(`/club/${clubId}/add-task`);
    };

    if (loading || !club) {
        return (
            <Panel id={id}>
                <PanelHeader>Загрузка...</PanelHeader>
            </Panel>
        );
    }

    return (
        <Panel id={id}>
            <PanelHeader onClick={goBack}>Страница клуба</PanelHeader>

            <Group>
                {/* Название и описание клуба */}
                <Div style={{ padding: '16px' }}>
                    <Text weight="medium" style={{ fontSize: '20px', marginBottom: '8px' }}>
                        {club.name}
                    </Text>
                    <Separator />
                    <Text weight="regular" style={{ marginTop: '8px' }}>Описание</Text>
                    <Text weight="regular" style={{ marginTop: '4px' }}>
                        {club.description}
                    </Text>
                </Div>

                <Separator />

                {/* Событие клуба */}
                <Div style={{ padding: '16px' }}>
                    <Cell
                        description={club.event.description}
                    >
                        {club.event.title}
                    </Cell>
                    <Text weight="regular" style={{ marginTop: '4px', color: '#818C99' }}>
                        {club.event.date}, {club.event.address}
                    </Text>
                </Div>

                <Separator />

                {/* Кнопка для добавления задания */}
                <Div>
                    <Button size="l" stretched mode="primary" onClick={goToAddTask}>
                        Добавить задание
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
