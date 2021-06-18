import React from 'react'
import { addNewSprint } from '../../lib/api'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import useForm from '../hooks/useForm'


export default function NewSprint() {
  // const [isError, setIsError] = React.useState(null)
  const [isStartingNewSprint, setisStartingNewSprint] = React.useState(false)
  const history = useHistory()
  const { user } = React.useContext(UserContext)
  console.log(user)
  const isLoading = !user
  const { formData, formErrors, handleChange } = useForm({
    sprintName: '',
  })

  window.onload = function() {
    console.log('LOADING')
  }

  const handleStartToggle = () => {
    setisStartingNewSprint(!isStartingNewSprint)
  }

  const handleNewSprint = async event => {
    event.preventDefault()
    try {
      await addNewSprint(formData)
      history.push('/sprints/setup')
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      {isLoading && <div><p>ॐ..loading...ॐ</p></div>}
      {user && 
      <>
        <div className={ isStartingNewSprint ? 'no-show' : ''}>
          <p>hey {user.username},</p>
          <p>looks like you&apos;re not currently in a sprint. <br/> begin your new sprint now. </p>
          <button onClick={handleStartToggle}>
        start new sprint
          </button>
        </div>
        <div className={ isStartingNewSprint ? '' : 'no-show'}>
          <form onSubmit={handleNewSprint}>
            <p>first things first, give your sprint a name</p>
            <div>
              <input
                placeholder="my awesome sprint"
                onChange={handleChange}
                name="sprintName"
                value={formData.sprintName}
              />
              {formErrors.sprintName && (
                <p>{formErrors.sprintName}</p>
              )}
            </div>
            <button>
              done!
            </button>
          </form>
        
        </div>
      </>
      }
    </>
  )
}