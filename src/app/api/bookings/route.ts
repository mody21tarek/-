import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({data:[],module:'bookings'})}
export async function POST(req:Request){const body=await req.json();return NextResponse.json({created:true,module:'bookings',body},{status:201})}
