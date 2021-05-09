export interface TasksResponse{

    ok: boolean;
    tasks: Task[];

} 


export interface Task {

    _id: string;
    title: string;
    listId: string;
    completed: boolean;

}