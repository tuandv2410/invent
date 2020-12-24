declare class Permission {
    id: string;
    name: string;
    description: string;
}
export declare class RoleDto {
    id: string;
    name: string;
    description: string;
    permissions: Permission[];
}
export {};
