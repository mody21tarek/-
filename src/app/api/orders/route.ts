import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({data:[],module:'orders'})}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({created:true,module:'orders',body},{status:201})}
