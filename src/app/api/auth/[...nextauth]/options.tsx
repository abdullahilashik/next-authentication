import type {NextAuthOptions} from 'next-auth';

export const options: NextAuthOptions = {
    proivders:[
        
    ],
    pages:{
        signIn: '/login'
    }
};