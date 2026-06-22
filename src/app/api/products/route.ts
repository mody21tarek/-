import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({data:[],module:'products'})}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({created:true,module:'products',body},{status:201})}
