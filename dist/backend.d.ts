declare const backendAPI: (apiUrl: string) => {
    getTenantNotifications: (tenantID: string) => Promise<import("./types").ResponseSpec & {
        notifications: import("./types").Notification[];
    }>;
    getUserNotifications: (authToken: string) => Promise<import("./types").ResponseSpec & {
        notifications: import("./types").Notification[];
    }>;
    getTenantConsumptionLogs: (authToken: string, tenantID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        consumptionLogs: import("./types").ConsumptionLog[];
    }>;
    getUserConsumptionLogs: (authToken: string, userID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        consumptionLogs: import("./types").ConsumptionLog[];
    }>;
    getMemoriConsumptionLogs: (authToken: string, memoriID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        consumptionLogs: import("./types").ConsumptionLog[];
    }>;
    getSentInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
        invitations: import("./types").Invitation[];
    }>;
    getReceivedInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
        invitations: import("./types").Invitation[];
    }>;
    getAllInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
        invitations: import("./types").Invitation[];
    }>;
    getInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
        invitation: import("./types").Invitation;
    }>;
    updateInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">> & {
        invitationID: string;
    }) => Promise<import("./types").ResponseSpec & {
        invitation: import("./types").Invitation;
    }>;
    deleteInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec>;
    acceptInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
        invitation: import("./types").Invitation;
    }>;
    rejectInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
        invitation: import("./types").Invitation;
    }>;
    sendInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">>) => Promise<import("./types").ResponseSpec & {
        invitation: import("./types").Invitation;
    }>;
    getMemoriIntegrationsList: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
        integrations: import("./types").Integration[];
    }>;
    getAllIntegrationsList: (authToken: string) => Promise<import("./types").ResponseSpec & {
        integrations: import("./types").Integration[];
    }>;
    getIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec & {
        integration: import("./types").Integration;
    }>;
    deleteIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec>;
    createIntegration: (authToken: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
        integration: import("./types").Integration;
    }>;
    updateIntegration: (authToken: string, integrationID: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
        integration: import("./types").Integration;
    }>;
    userSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
    }>;
    userConfirmSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
        token?: string | undefined;
    }>;
    userLogin: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
        token?: string | undefined;
        flowID?: string | undefined;
    }>;
    userLogout: (authToken: string) => Promise<import("./types").ResponseSpec>;
    getUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
    }>;
    getUsersList: (authToken: string) => Promise<import("./types").ResponseSpec & {
        users: import("./types").User[];
    }>;
    deleteUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec>;
    updateUser: (authToken: string, userID: string, user: import("./types").User) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
    }>;
    resetPassword: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
    resetConfirm: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
        token?: string | undefined;
        flowID?: string | undefined;
    }>;
    recoverUsername: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
    getTenantConfig: (tenantName: string) => Promise<import("./types").ResponseSpec & {
        tenant: import("./types").Tenant;
    }>;
    resendVerificationCode: (user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec>;
    createUser: (authToken: string, user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec & {
        user: import("./types").User;
    }>;
    getTenantPublicMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori[];
    }>;
    getPublicMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori[];
    }>;
    getAllMemori: (authToken: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori[];
    }>;
    getUserMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori[];
    }>;
    getSharedMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori[];
    }>;
    getTenantCategories: (tenant: string) => Promise<import("./types").ResponseSpec & {
        memoriCategories: string[];
    }>;
    getMemoriConfigs: (authToken: string) => Promise<import("./types").ResponseSpec & {
        memoriConfigs: import("./types").MemoriConfig[];
    }>;
    createMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori;
    }>;
    updateMemori: (authToken: string, memori: Partial<import("./types").Memori> & {
        memoriID: string;
    }) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori;
    }>;
    deleteMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec>;
    getMemoriById: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori;
    }>;
    getMemoriByUserAndId: (tenantName: string, userID: string, memoriID: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori;
    }>;
    getMemori: (tenant: string, userName: string, memoriName: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
        memori: import("./types").Memori;
    }>;
    getMemoriSessions: (authToken: string, memoriID: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        totalSessions: number;
        validSessions: number;
    }>;
    transferMemori: (authToken: string, memori: import("./types").Memori & {
        ownerTenantName: string;
        ownerUserName: string;
    }) => Promise<import("./types").ResponseSpec>;
    getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string | undefined) => string;
    uploadAsset: (fileName: string, fileUrl: string, authToken: string, memoriID: string, memoryID?: string | undefined) => Promise<import("./types").ResponseSpec & {
        asset: import("./types").Asset;
    }>;
    getAsset: (fileName: string, sessionID: string) => Promise<any>;
    updateAsset: (authToken: string, assetURL: string, asset: import("./types").Asset) => Promise<import("./types").ResponseSpec & {
        asset: import("./types").Asset;
    }>;
    deleteAsset: (authToken: string, assetURL: string) => Promise<import("./types").ResponseSpec>;
    asset: {
        getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string | undefined) => string;
        uploadAsset: (fileName: string, fileUrl: string, authToken: string, memoriID: string, memoryID?: string | undefined) => Promise<import("./types").ResponseSpec & {
            asset: import("./types").Asset;
        }>;
        getAsset: (fileName: string, sessionID: string) => Promise<any>;
        updateAsset: (authToken: string, assetURL: string, asset: import("./types").Asset) => Promise<import("./types").ResponseSpec & {
            asset: import("./types").Asset;
        }>;
        deleteAsset: (authToken: string, assetURL: string) => Promise<import("./types").ResponseSpec>;
    };
    memori: {
        getTenantPublicMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getPublicMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getAllMemori: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getUserMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getSharedMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getTenantCategories: (tenant: string) => Promise<import("./types").ResponseSpec & {
            memoriCategories: string[];
        }>;
        getMemoriConfigs: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memoriConfigs: import("./types").MemoriConfig[];
        }>;
        createMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        updateMemori: (authToken: string, memori: Partial<import("./types").Memori> & {
            memoriID: string;
        }) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        deleteMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec>;
        getMemoriById: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemoriByUserAndId: (tenantName: string, userID: string, memoriID: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemori: (tenant: string, userName: string, memoriName: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemoriSessions: (authToken: string, memoriID: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            totalSessions: number;
            validSessions: number;
        }>;
        transferMemori: (authToken: string, memori: import("./types").Memori & {
            ownerTenantName: string;
            ownerUserName: string;
        }) => Promise<import("./types").ResponseSpec>;
    };
    user: {
        userSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        userConfirmSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
        }>;
        userLogin: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
            flowID?: string | undefined;
        }>;
        userLogout: (authToken: string) => Promise<import("./types").ResponseSpec>;
        getUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        getUsersList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            users: import("./types").User[];
        }>;
        deleteUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec>;
        updateUser: (authToken: string, userID: string, user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        resetPassword: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
        resetConfirm: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
            flowID?: string | undefined;
        }>;
        recoverUsername: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
        getTenantConfig: (tenantName: string) => Promise<import("./types").ResponseSpec & {
            tenant: import("./types").Tenant;
        }>;
        resendVerificationCode: (user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec>;
        createUser: (authToken: string, user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
    };
    integration: {
        getMemoriIntegrationsList: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
            integrations: import("./types").Integration[];
        }>;
        getAllIntegrationsList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            integrations: import("./types").Integration[];
        }>;
        getIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
        deleteIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec>;
        createIntegration: (authToken: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
        updateIntegration: (authToken: string, integrationID: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
    };
    invitation: {
        getSentInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getReceivedInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getAllInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        updateInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">> & {
            invitationID: string;
        }) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        deleteInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec>;
        acceptInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        rejectInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        sendInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">>) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
    };
    consumptionLogs: {
        getTenantConsumptionLogs: (authToken: string, tenantID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
        getUserConsumptionLogs: (authToken: string, userID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
        getMemoriConsumptionLogs: (authToken: string, memoriID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
    };
    notifications: {
        getTenantNotifications: (tenantID: string) => Promise<import("./types").ResponseSpec & {
            notifications: import("./types").Notification[];
        }>;
        getUserNotifications: (authToken: string) => Promise<import("./types").ResponseSpec & {
            notifications: import("./types").Notification[];
        }>;
    };
};
export default backendAPI;
