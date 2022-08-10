/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0 */

import React, { createContext, useContext } from 'react';
import {chatInitiationIcon, chatWidgetDefaults } from '../constants';

const AppConfigContext = createContext(null);

export function useAppConfig(){
    const config = useContext(AppConfigContext);
    if(!config) throw new Error('useAppConfig must be used within AppConfigProvider');
    return config;
}

const createRandom = () => {
    let result = "";
    let hexChar = "0123456789abcdef";
    for (var i = 0; i < 6; i++) {
    result += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
    }
    return result
}

export const AppConfigProvider = ({ children, config }) => {
    
    const initiationIcon = config.initiationIcon ? config.initiationIcon : chatInitiationIcon.ICON;
    const region = config.region ? config.region : '';
    const name = config.name ? config.name : chatWidgetDefaults.NAME;
    // const username = config.username? config.username : chatWidgetDefaults.USERNAME;
    const username = createRandom();
    const apiGateway = config.apiGateway ? config.apiGateway : '';
    const contactFlowId = config.contactFlowId ? config.contactFlowId : '';
    const instanceId = config.instanceId ? config.instanceId : '';
    const contactAttr = config.contactAttr ? config.contactAttr : {};
    const enableAttachments = config.attachments ? config.attachments : chatWidgetDefaults.ENABLE_ATTACHMENTS;
    const preChatForm = config.preChatForm ? config.preChatForm : {};
    const primaryColor = config.primaryColor ? config.primaryColor : chatWidgetDefaults.PRIMARY_COLOR;
    const description = config.description ? config.description : chatWidgetDefaults.DESCRIPTION;

    const providerValue = {
        initiationIcon,
        region,
        name,
        username,
        apiGateway,
        contactFlowId,
        instanceId,
        contactAttr,
        enableAttachments,
        preChatForm,
        primaryColor,
        description
    };

    return (
        <AppConfigContext.Provider value={providerValue}>
            {children}
        </AppConfigContext.Provider>
    )
}