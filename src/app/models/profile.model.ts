
export class Profile {
    id: number | undefined;
    name: string | undefined;
    gender: string | undefined;
    email!: string;
    phoneNumber!: string;
    contactPreference!: string;
    dateOfBirth!: Date;
    department!: string;
    isActive!: boolean;
    photoPath!: string;
}