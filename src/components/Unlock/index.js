import {useState} from 'react'
import {Container, Button, DisplayContent} from './styledComponents'

const lockedImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

const unlockedImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLocked, setIsLockedValue] = useState(true)

  const onClickButton = () => {
    setIsLockedValue(prevState => !prevState)
  }

  return (
    <Container>
      {isLocked ? (
        <>
          <img src={lockedImage} alt="lock" />
          <DisplayContent>Your Device is Locked</DisplayContent>
        </>
      ) : (
        <>
          <img src={unlockedImage} alt="unlock" />
          <DisplayContent>Your Device is Unlocked</DisplayContent>
        </>
      )}
      <Button type="button" onClick={onClickButton}>
        {isLocked ? 'Unlock' : 'lock'}
      </Button>
    </Container>
  )
}

export default Unlock
