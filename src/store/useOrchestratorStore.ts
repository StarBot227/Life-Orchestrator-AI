import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

export const useOrchestratorStore = create((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state: any) => ({ tasks: [...state.tasks, task] })),
  completeTask: (id: string) => set((state: any) => ({
    tasks: state.tasks.map((t: any) => t.id === id ? { ...t, completed: true } : t)
  }))
}));
