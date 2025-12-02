export interface Task {
  id: string;
  boardId: string;
  title: string;
  desc?: string;
  tags?: string[];
  priority?: string;
  status?: string;
  assign?: any;
  image?: string;
  category?: string;
  pages?: any;
  messageCount?: number;
  link?: string;
  date?: string;
  time?: string;
  [key: string]: any;
}

export interface SubTask {
  id: string;
  taskId: string;
  title: string;
  completed: boolean;
  assignDate?: string;
  [key: string]: any;
}

