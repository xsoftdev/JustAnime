import {Nitro} from 'nitropack'
import mongoose from 'mongoose'

export default async (_nitroApp: Nitro) => {
    
    const config = useRuntimeConfig()

    try {
        await mongoose.connect(config.privateRuntimeConfig.mongodb_url);
        console.log("Connected to MongoDB");
        
    } catch(e) {
        console.log(e)
    }
}