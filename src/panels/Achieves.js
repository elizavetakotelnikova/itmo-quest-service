import React from 'react';
import { Panel, PanelHeader, Group, Cell, Div, Button, Header, PanelHeaderBack } from '@vkontakte/vkui';
import { Icon28CheckCircleOutline, Icon28ShareOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const Achieves = ({ id }) => {
    const routeNavigator = useRouteNavigator();

    const goBack = () => {
        routeNavigator.back();
    };

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={goBack} />}>
                Достижения
            </PanelHeader>

            <Group>
                <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ fontSize: 16, color: 'gray' }}>Ваш текущий уровень:</div>
                    <div style={{ fontSize: 48, fontWeight: 'bold' }}>7</div>
                    <div style={{ fontSize: 14, color: 'gray' }}>Выполненных заданий: 15</div>
                </Div>
            </Group>


            <Group header={<Header mode="secondary">Достижения</Header>}>
                <Cell
                    before={<Icon28CheckCircleOutline />}
                    description="15.10.2024 - 20.10.2024, Кронверкский пр-кт, д. 49, Ауд. 228"
                    after={<Icon28CheckCircleOutline />}
                    expandable
                >
                    Университет ИТМО — Купить Питерскую ватрушку в столовой Ломо.
                </Cell>


                <Cell
                    before={<Icon28CheckCircleOutline />}
                    description="19:30, 15.10.2024, Кронверкский пр-кт, д. 49, Ауд. 228"
                    after={<Icon28CheckCircleOutline />}
                    expandable
                >
                    Клуб любителей плитки в ванной — Конкурс наименее скользящей домашней плитки.
                </Cell>
            </Group>

            <Div>
                <Button size="l" stretched mode="secondary" before={<Icon28ShareOutline />}>
                    Поделиться статистикой
                </Button>
            </Div>
            <Div>
                <Button size="l" stretched mode="secondary" onClick={goBack}>
                    Назад
                </Button>
            </Div>
        </Panel>
    );
};
