import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
export const roles=['SUPER_ADMIN','BRANCH_MANAGER','CUSTOMER_SERVICE','SALES_MANAGER','ACCOUNTANT','TECHNICIAN'] as const;
export async function hashPassword(password:string){return bcrypt.hash(password,12)}
export async function verifyPassword(password:string,hash:string){return bcrypt.compare(password,hash)}
export async function signToken(payload:Record<string,unknown>){const secret=new TextEncoder().encode(process.env.JWT_SECRET||'dev-secret-change');return new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(secret)}
export async function verifyToken(token:string){const secret=new TextEncoder().encode(process.env.JWT_SECRET||'dev-secret-change');return jwtVerify(token,secret)}
export function can(role:string, permission:string){if(role==='SUPER_ADMIN') return true;return permission.startsWith(role.toLowerCase().replaceAll('_','-'))}
