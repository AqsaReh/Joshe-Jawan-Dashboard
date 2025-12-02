export interface Comment {
  id: string;
  taskId?: string;
  subTaskId?: string;
  text: string;
  name: string;
  avatar?: string;
  date?: string;
  [key: string]: any;
}

