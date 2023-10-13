import { dataMock } from "../mock/tasksMock"

interface ITaskArgs {
    id: number,
    task: string
}


const EditTaskService = (data: ITaskArgs) => {

    dataMock[data.id - 1] = {
        ...dataMock,
        task: data.task
    }

}

export default EditTaskService