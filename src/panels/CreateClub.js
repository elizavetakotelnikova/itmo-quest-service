import React, { useState } from 'react';
import { Panel, PanelHeader, Group, Div, Button, FormItem, Input, Textarea, CustomSelect } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon56Users3Outline } from '@vkontakte/icons';
import { postNewClubData } from '../api/requests/requests.js'

export const CreateClub = ({ id, userId }) => {
    const routeNavigator = useRouteNavigator()
    const [clubName, setClubName] = useState('');
    const [category, setCategory] = useState('');
    const [membershipType, setMembershipType] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateClub = () => {
        console.log(clubName, category, membershipType, description, userId)
        postNewClubData(clubName, category, membershipType, description, userId)
        goBack();
    };

    const goBack = () => {
        routeNavigator.back();
    };


    const categories = [
        { label: 'Музыка', value: 'music' },
        { label: 'Спорт', value: 'sports' },
        { label: 'Аниме', value: 'anime' },
        { label: 'Игры', value: 'games' },
    ];
    return (
        <Panel id={id}>
            <PanelHeader>Создать клуб</PanelHeader>

            <Div style={{ margin: '0 auto', padding: '0px' }}>
                <Icon56Users3Outline width={64} height={64} />
            </Div>

            <Group>
                <FormItem top="Название">
                    <Input
                        type="text"
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}
                        placeholder="Введите название"
                    />
                </FormItem>
                <FormItem top="Категория">
                    <CustomSelect
                        placeholder="Выберите категорию"
                        options={categories}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </FormItem>
                <FormItem top="Тип членства">
                    <CustomSelect
                        placeholder="Выберите тип"
                        options={[
                            { label: 'Открытый', value: 'open' },
                            { label: 'Закрытый', value: 'closed' }
                        ]}
                        value={membershipType}
                        onChange={(e) => setMembershipType(e.target.value)}
                    />
                </FormItem>

                <FormItem top="Описание">
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Введите описание клуба"
                    />
                </FormItem>

                <Div>
                    <Button size="l" stretched onClick={handleCreateClub}>
                        Создать клуб
                    </Button>
                </Div>

                <Div>
                    <Button size="l" stretched mode="secondary" onClick={goBack}>
                        Назад
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
