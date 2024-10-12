import React, { useState, useEffect } from 'react';
import { Panel, PanelHeader, Group, Cell, Avatar, Div, Button, Spinner } from '@vkontakte/vkui';
import { Icon28FavoriteOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { getClubs } from '../api/requests/requests.js';

export const MyClubs = ({ id, userId }) => {
    const routeNavigator = useRouteNavigator();

    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchClubs = async () => {
            if (!userId) return;

            try {
                const data = await getClubs(userId);
                if (Array.isArray(data)) {
                    setClubs(data);
                } else {
                    setClubs([]);
                }
            } catch (error) {
                console.error('Ошибка при получении клубов:', error);
                setClubs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchClubs();
    }, [userId]);

    const goBack = () => {
        routeNavigator.back();
    };


    const goToClubDetails = (clubId) => {
        routeNavigator.push(`/club/${clubId}`);
    };

    return (
        <Panel id={id}>
            <PanelHeader>Мои клубы</PanelHeader>

            {loading ? (
                <Spinner size="large" />
            ) : (
                <Group>
                    {clubs.length > 0 ? (
                        clubs.map((club) => (
                            <Cell
                                key={club.id}
                                before={<Avatar size={48} src={club.avatarUrl} />}
                                description={club.description}
                                after={<Icon28FavoriteOutline />}
                                expandable
                                onClick={() => goToClubDetails(club.id)}
                            >
                                {club.name}
                            </Cell>
                        ))
                    ) : (
                        <Div style={{ textAlign: "center" }}>Клубы не найдены</Div>
                    )}
                </Group>
            )}

            <Div>
                <Button size="l" stretched mode="secondary" onClick={goBack}>
                    Назад
                </Button>
            </Div>
        </Panel>
    );
};
