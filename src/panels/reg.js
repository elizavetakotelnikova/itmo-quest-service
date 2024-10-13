import React, { useState } from 'react';
import { Panel, PanelHeader, Group, FormItem, Input, Checkbox, Button, Div, Avatar } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import PropTypes from 'prop-types';
import { createUser } from '../api/requests/requests.js'

export const Login = ({ id, onLoginSuccess, fetchedUser }) => {
    const [isuNumber, setIsuNumber] = useState('');
    const [consentGiven, setConsentGiven] = useState(false);

    const handleLogin = async () => {
        if (consentGiven && isuNumber) {
            try {
                console.log(isuNumber, fetchedUser?.first_name, fetchedUser?.last_name, fetchedUser?.id)
                const newUser = await createUser(isuNumber, fetchedUser?.first_name, fetchedUser?.last_name, fetchedUser?.id);
                onLoginSuccess(isuNumber, newUser.id);
            } catch (error) {
                console.error('Ошибка при создании пользователя:', error);
            }
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

Login.propTypes = {
    id: PropTypes.string.isRequired,
    fetchedUser: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
    }),
};

