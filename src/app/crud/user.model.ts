
    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface Support {
        url: string;
        text: string;
    }

    export interface respostaUser {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
        support: Support;
    }

    export interface RequestCreate {
        name: string;
        job: string;
    }

    export interface RespostaCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }

    export interface ResponseUser {
        data: User
    }
    
    export interface ResquestUpdate {
        name: string;
        job: string;
    }
    
    export interface ResponseUpdate {
        name: string;
        job: string;
        updatedAt: Date;
    }

