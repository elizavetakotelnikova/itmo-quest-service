import React from 'react';
import { Card, Div, Subhead, Text, Title } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const TaskCard = () => {
    const routeNavigator = useRouteNavigator();

    return (
        <Card
            style={{ marginBottom: 20, padding: 16 }}
            onClick={() => {
                routeNavigator.push('/task');
            }}
        >
            <Div>
                <Title level="2" weight="medium" style={{ marginBottom: 8 }}>
                    Посмотреть 100 аниме
                </Title>

                <Text weight="regular" style={{ color: '#666', marginBottom: 8 }}>
                    Аниме-клуб "Котацу" • ул. Ломоносова, д. 49, Ауд. 1415
                </Text>

                <Subhead weight="regular" style={{ marginBottom: 10 }}>
                    До 30 октября 2024
                </Subhead>
            </Div>
        </Card>
    );
};