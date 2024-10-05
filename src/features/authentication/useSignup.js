import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth";
import {toast} from "react-hot-toast";

export function useSignup() {
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user);
            toast.success("Account successfully created! Please verufy the new account from the user's emai" +
                    "l address.");
        }
    });
    return {signup, isLoading}
}