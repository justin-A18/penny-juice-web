import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "../schemas/auth.schema";
import { registerUser } from "../services/auth.service";
import { RegisterUserBody } from "../interfaces/request";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRegisterUser = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const onSubmit = async (values: RegisterSchema) => {
		await mutateAsync(values);
	};

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: RegisterUserBody) => registerUser(body),
		onSuccess: (data) => {
			toast.success(data.message);
			router.push('/');
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending
	};
};