import { Button, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router"

export const Home = () => {
  const navigate = useNavigate()
  return (
    <HStack>
      <Button onClick={() => { navigate('exercise-form') }}>Registrar ejercicio</Button>
    </HStack>
  )
}