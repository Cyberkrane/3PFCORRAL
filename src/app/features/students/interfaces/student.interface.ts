

export interface IStudent {
    id: number;
    name: string;
    alias: string;
    email: string;
    age: number;
    courses: ICourse[];
}

export interface ICourse {
    id: number;
    name: string;
    classId: number;
}
