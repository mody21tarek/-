import { NextResponse } from 'next/server';import { z } from 'zod';import { signToken } from '@/lib/security';
const schema=z.object({email:z.string().email(),password:z.string().min(8)});
export async function POST(req:Request){const body=schema.parse(await req.json());return NextResponse.json({token:await signToken({sub:body.email,role:'SUPER_ADMIN'}),user:{email:body.email,role:'SUPER_ADMIN'}})}
