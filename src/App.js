import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Screens/login';
import Sign from './pages/Screens/sign-up';
import Forgot from './pages/Screens/forgot-password';
import Email from './pages/Screens/email-confirm';
import NewPassword from './pages/Screens/new-password';
import Dashboard from './pages/Screens/dashboard';
import Profile from './pages/Screens/profile';
import EmailActivate from './pages/Screens/email-activate';
import Content from './pages/Screens/content';



function App() {
  return (
    <>
    <Router>
    <div>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/user-profile' element={<Profile />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/login' element={<Login />} />
      <Route path='/email-activate' element={<EmailActivate />} />
      <Route path='/create-password' element={<NewPassword />} />
      <Route path='/forgot-password' element={<Forgot />} />
      <Route path='/email-confirm' element={<Email />} />
      <Route path='/content' element={<Content />} />
    </Routes>
    </div>
    </Router>
    </>
  
  );
}

export default App;
