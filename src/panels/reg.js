import React, { useState } from 'react';
import { Panel, PanelHeader, Group, FormItem, Input, Checkbox, Button, Div, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export const Login = ({ id, onLoginSuccess }) => {
    const [isuNumber, setIsuNumber] = useState('');
    const [consentGiven, setConsentGiven] = useState(false);

    const handleLogin = () => {
        if (consentGiven && isuNumber) {
            onLoginSuccess(isuNumber);
        } else {
            alert("Введите номер ИСУ и подтвердите согласие на обработку данных.");
        }
    };

    return (
        <Panel id={id}>
            <PanelHeader>Имя приложения</PanelHeader>

            <Group>
                <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar
                        size={128}
                        src="src/pics/logo.svg"
                        style={{ borderRadius: '30px', width: '200px', height: "auto" }}
                    />
                </Div>

                <FormItem top="Номер ИСУ:">
                    <Input
                        type="text"
                        placeholder="Введите Ваш номер ИСУ"
                        value={isuNumber}
                        onChange={(e) => setIsuNumber(e.target.value)}
                    />
                </FormItem>

                <FormItem>
                    <Checkbox
                        checked={consentGiven}
                        onChange={(e) => setConsentGiven(e.target.checked)}
                    >
                        Даю согласие на обработку персональных данных
                    </Checkbox>
                </FormItem>

                <Div>
                    <Button size="l" stretched mode="primary" onClick={handleLogin}>
                        Войти
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};
