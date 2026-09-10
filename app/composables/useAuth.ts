export const SignIN = async (form: Object) => {
    try{
        const res = await useApi().post("/auth/login", form)
        console.log(res)
    }catch(e){
        
    }
}

export const SignUP = async(form: Object) => {
    try{
        const res = await useApi().post("/auth/register", form)
        console.log(res)
    }catch(e){
        console.log(e)
    }
}

