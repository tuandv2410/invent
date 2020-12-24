export interface JwtPayload {
    username: string;
    permissions: string[];
    organization: string;
}
