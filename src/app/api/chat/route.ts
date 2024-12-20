import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(request : Request){

    const body = await request.json();
    const { prompt } = body;

    try{
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        //const prompt = "Explain how AI works";
        if(!prompt){
            return NextResponse.json({ message: 'Prompt is required' }, {status: 400});
        }

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return NextResponse.json({ message: 'Content generated successfully', content: result.response.text() }, {status: 200});
    }catch(error){
        console.error(error);
        return NextResponse.json({message: 'Internal server error', error }, {status: 500});
    }
}
