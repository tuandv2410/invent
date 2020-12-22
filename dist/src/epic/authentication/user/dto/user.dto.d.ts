declare class Role {
    id: string;
    name: string;
    description: string;
}
declare class Permission {
    id: string;
    name: string;
    description: string;
}
export declare class UserDto {
    id: number;
    username: string;
    email: string;
    organization: string;
    permissions: Permission[];
    roles: Role[];
}
export {};
