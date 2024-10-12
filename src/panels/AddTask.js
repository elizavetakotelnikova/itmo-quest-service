import React, { useState } from 'react';
import { Panel, PanelHeader, Group, FormItem, Input, Textarea, Div, Button } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const AddTask = ({ id, clubId }) => {
    const routeNavigator = useRouteNavigator();
    const [taskTitle, setTaskTitle] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const goBack = () => {
        routeNavigator.back();
    };

    const handleSubmit = () => {
        const taskData = {
            taskTitle,
            additionalInfo,
            clubId
        };

        console.log('Задание отправлено:', taskData);
        postNewTask(taskTitle, additionalInfo, clubId);
        routeNavigator.back();
    };

    return (
        <Panel id={id}>
            <PanelHeader onClick={goBack}>Добавить задание</PanelHeader>

            <Group>
                <FormItem top="Задание">
                    <Input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Введите задание"
                    />
                </FormItem>

                <FormItem top="Дополнительная информация">
                    <Textarea
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="Введите дополнительную информацию"
                    />
                </FormItem>

                <Div>
                    <Button size="l" stretched mode="primary" onClick={handleSubmit}>
                        Сохранить задание
                    </Button>
                </Div>

                <Div>
                    <Button size="l" stretched mode="secondary" onClick={goBack}>
                        Отмена
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
