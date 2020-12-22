declare class Role {
    id: string;
    name: string;
    description: string;
}
export declare class PermissionDto {
    id: string;
    name: string;
    description: string;
    roles: Role[];
}
export {};
