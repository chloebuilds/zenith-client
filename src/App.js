import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/common/Home'
import Dashboard from './components/common/Dashboard'
import Nav from './components/common/Nav'
import NotFound from './components/common/NotFound'
import NotAuthorized from './components/common/NotAuthorized'
import { UserProvider } from './components/context/UserContext'
// import SprintGoals from './components/zenith/SprintGoals'
import NewSprint from './components/zenith/NewSprint'
import NewSprintSetUp from './components/zenith/NewSprintSetUp'
import Toggle from './components/common/Toggle'
import { useDarkMode } from './components/common/UseDarkMode'

import { GlobalStyle } from '../src/styles/styled-components/Global'
import { lightTheme, darkTheme } from './styles/styled-components/Theme'

function App() {
  const [theme, toggleTheme] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <Router>
      <UserProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <Nav />
          <Toggle theme={theme} toggleTheme={toggleTheme} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route path="/sprints/new" component={NewSprint} />
        <Route path="/sprints" component={SprintsIndex} /> */}
            {/* <Route path="/sprints/:sprintId/sprint-goals" component={SprintGoals} /> */}
            <Route path="/sprints/new/setup" component={NewSprintSetUp} />
            <Route path="/sprints/new" component={NewSprint} />

            {/* for any page not found */}
            <Route path="/401" component={NotAuthorized} />
            <Route exact path="*" component={NotFound} />
          </Switch>
          <ToastContainer />
        </ThemeProvider>
      </UserProvider>
    </Router>
  )
}

export default App
