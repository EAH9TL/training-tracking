import { Button, Field, Fieldset, For, HStack, Input, NativeSelect, RadioCard, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { RiCloseFill, RiSave2Fill } from "react-icons/ri"
import { useNavigate } from "react-router"

const items = [
    { value: "kg", title: "Kilogramos" },
    { value: "lb", title: "Libras" },
    { value: "bar", title: "Barras" },
]

const categories = [
    "Pierna",
    "Pecho",
    "Espalda",
    "Triceps",
    "Biceps",
    "Hombros",
    "Abdomen",
];

export const ExcerciseForm = () => {
    const [weightType, setWeightType] = useState<string>("kg")
    const [excercise, setExcercise] = useState<string>('')
    const [categoty, setCategoty] = useState<string>(categories[0])
    const [weight, setWeight] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API o almacenarlos en el estado.
        console.log("Formulario enviado");
    };
    return (
        <>
            <div style={{ padding: '1rem' }}>
                <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                    <Fieldset.Root size="lg" maxW="md" colorPalette={"teal"}>
                        <Stack>
                            <Fieldset.Legend>Registrar</Fieldset.Legend>
                            <Fieldset.HelperText>
                                Por favor completa el siguiente formulario para registrar un nuevo ejercicio.
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content>
                            <Field.Root>
                                <Field.Label>Categoría</Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field name="category" value={categoty} onChange={(e) => {
                                        setCategoty(e.target.value)
                                    }}>
                                        <For each={categories}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>
                            <Field.Root required>
                                <Field.Label>Nombre del ejercicio o maquina<Field.RequiredIndicator /></Field.Label>
                                <Input name="excercise" placeholder="MARTILLO" value={excercise} onChange={(e) => {
                                    setExcercise(e.target.value)
                                }} />
                            </Field.Root>

                            <RadioCard.Root defaultValue={weightType} variant={"subtle"} onValueChange={(e) => { setWeightType(e.value!); setWeight("") }
                            }>
                                <RadioCard.Label>Selecciona la unidad de medida:</RadioCard.Label>
                                <HStack align="stretch">
                                    {items.map((item) => (
                                        <RadioCard.Item key={item.value} value={item.value}>
                                            <RadioCard.ItemHiddenInput />
                                            <RadioCard.ItemControl>
                                                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                                                {/* <RadioCard.ItemIndicator /> */}
                                            </RadioCard.ItemControl>
                                        </RadioCard.Item>
                                    ))}
                                </HStack>
                            </RadioCard.Root>

                            {weightType === "kg" && <Field.Root required>
                                <Field.Label>Último peso en KG <Field.RequiredIndicator /></Field.Label>
                                <Input name="kg" type="number" placeholder="15" step={0.1} value={weight} onChange={(e) => {
                                    setWeight(e.target.value)
                                }} />
                            </Field.Root>}
                            {weightType === "lb" && <Field.Root required>
                                <Field.Label>Último peso en LB <Field.RequiredIndicator /></Field.Label>
                                <Input name="lb" type="number" placeholder="7" step={0.1} value={weight} onChange={(e) => {
                                    setWeight(e.target.value)
                                }} />
                            </Field.Root>}
                            {weightType === "bar" && <Field.Root required>
                                <Field.Label>Último peso en Barras <Field.RequiredIndicator /></Field.Label>
                                <Input name="barras" type="number" placeholder="4" value={weight} onChange={(e) => {
                                    setWeight(e.target.value)
                                }} />
                            </Field.Root>}

                        </Fieldset.Content>

                        <HStack justifyContent="space-between">
                            <Button type="button" onClick={() => navigate('/')}>
                                <RiCloseFill /> Cancelar
                            </Button>
                            <Button type="submit">
                                <RiSave2Fill /> Guardar
                            </Button>
                        </HStack>
                    </Fieldset.Root>
                </form>
            </div >
        </>
    )
}
