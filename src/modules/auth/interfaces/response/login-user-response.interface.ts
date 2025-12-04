import { UserEntity } from "@/modules/global/interfaces/entities/user.entity";

export interface LoginUserResponse {
	token: string;
	user: UserEntity;
}