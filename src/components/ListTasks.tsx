import { PlusCircle } from 'phosphor-react';

import styles from './ListTasks.module.css';

export function ListTasks() {
  return (
    <div>
      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        
        <button type="submit">Criar <PlusCircle size={22}/></button>
      </form>

      <div className={styles.listTasks}>
        <header>
          <div>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </header>
        <main>
          <article>Task</article>
        </main>
      </div>
    </div>
  );
}