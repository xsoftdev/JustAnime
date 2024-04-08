import { useRouter } from "vue-router"
const router = useRouter()

export const Redirect = () => {
    const loc = (val: string) => {
        navigateTo(val)
    }

    return {
        loc
    }
}