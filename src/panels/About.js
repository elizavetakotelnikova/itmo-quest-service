import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Title, Text, Header, Separator } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const About = ({ id }) => {
    const routeNavigator = useRouteNavigator();
    const goBack = () => {
        routeNavigator.back();
    };

    return (
        <Panel id={id}>
            <PanelHeader>О приложении</PanelHeader>

            <Group>
                <Div style={{ textAlign: 'center' }}>
                    <Title level="1" weight="bold" style={{ marginBottom: 16 }}>
                        О приложении
                    </Title>
                </Div>

                <Separator />

                <Div style={{ textAlign: 'center', marginTop: 16 }}>
                    <Text weight="regular" style={{ marginBottom: 16 }}>
                        Приложение создано на платформе VK Mini Apps командой "По киндеру и спать".
                    </Text>
                </Div>

                <Group header={<Header mode="secondary">Команда</Header>}>
                    <Div>
                        <Text weight="medium">Елизавета Котельникова</Text>
                        <Text weight="regular" style={{ color: 'gray' }}>Backend</Text>
                    </Div>
                    <Div>
                        <Text weight="medium">Анжелика Василенко</Text>
                        <Text weight="regular" style={{ color: 'gray' }}>Backend, Team Lead</Text>
                    </Div>
                    <Div>
                        <Text weight="medium">Егор Добриков</Text>
                        <Text weight="regular" style={{ color: 'gray' }}>Frontend, UI</Text>
                    </Div>
                </Group>

                <Separator />

                <Div style={{ marginTop: 16 }}>
                    <Button size="l" stretched mode="secondary" onClick={goBack}>
                        Назад
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
