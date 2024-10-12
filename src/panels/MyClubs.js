import React, { useState } from 'react';
import { Panel, PanelHeader, Group, Cell, Avatar, Div, Button } from '@vkontakte/vkui';
import { Icon28FavoriteOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const MyClubs = ({ id }) => {
    const routeNavigator = useRouteNavigator()

    const goBack = () => {
        routeNavigator.back();
    };

    return (
        <Panel id={id}>
            <PanelHeader>Мои клубы</PanelHeader>

            <Group>
                <Cell
                    before={<Avatar size={48} />}
                    description="Ламповое сообщество любителей японской анимации."
                    after={<Icon28FavoriteOutline />}
                    expandable
                >
                    Аниме-клуб "Котацу"
                </Cell>

                <Cell
                    before={<Avatar size={48} />}
                    description="Рок-н-ролл, блюз, джаз может быть крут-рок? В нашем клубе можно играть любой жанр."
                    after={<Icon28FavoriteOutline />}
                    expandable
                >
                    Музыкальный клуб "Живой Звук"
                </Cell>

                <Cell
                    before={<Avatar size={48} />}
                    description="Заскакивай к нам на чашечку чая и каточку в DnD."
                    after={<Icon28FavoriteOutline />}
                    expandable
                >
                    Клуб любителей настольных игр GEEKMO
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
