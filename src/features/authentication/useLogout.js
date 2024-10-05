import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as LogoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: LogoutApi,
        onSuccess: () => {
            queryClient.removeQueries
            navigate('/login', { replace: true })
        }
    });
    return { logout, isLoading }
}