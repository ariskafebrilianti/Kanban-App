import { RecoilRoot } from 'recoil'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SideMenu from './components/SideMenu'
import TaskSummary from './features/tasks/components/TaskSummary'
import TaskList from './features/tasks/components/TaskList/TaskList'
import TaskProgress from './features/tasks/components/TaskProgress/TaskProgress'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    (
      <div style={{ display: 'flex' }}>
        <SideMenu/> 
        <TaskSummary/>,
      </div>
    ),
  },
  {
    path: 'task-list',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu/> 
        <TaskList/>
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu/> 
        <TaskProgress/>
      </div>
    ),
  },
], 
{basename: '/kanban1/'} // Nama repository ditambahkan
)

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App