import { Route, Routes } from "react-router"
import { Home } from "../pages/Home/Home"
import { ExcerciseForm } from "@/pages/ExerciseForm/ExcerciseForm"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-form" element={<ExcerciseForm />} />
      </Routes>
    </>
  )
}
