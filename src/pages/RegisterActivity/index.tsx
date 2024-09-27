import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "@phosphor-icons/react";

import * as z from "zod";

import { Input } from "../../components/Input";
import { ActivityItem } from "../../components/ActivityItem";

import theme from "../../themes";

import {
  Background,
  Button,
  Container,
  ContainerActivities,
  ContainerRegister,
  EmptyContentMessage,
  InputText,
  LocationComponent,
  TitleActivity
} from "./styles";

const dados = [
  {
    checked: true,
    description: "Descrição da atividade",
    date: "06 de outubro",
    time: "09:30"
  },
  {
    checked: false,
    description: "Descrição da atividade 1",
    date: "12 de outubro",
    time: "19:30"
  }
];

interface Activity {
  checked: boolean;
  description: string;
  date: string;
  time: string;
}

const formSchema = z.object({
  checked: z.boolean().default(false),
  description: z.string().min(1, "Descrição obrigatória."),
  date: z.string().min(1, "Data obrigatória."),
  time: z
    .string()
    .min(1, "Horário obrigatório.")
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Horário inválido. Use o formato HH:MM."
    )
});

export function RegisterActivity() {
  const [data, setData] = useState(dados);
  const datePlaceholder = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long"
  });
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors }
  } = useForm<Activity>({ resolver: zodResolver(formSchema) });

  function handleAddActivity() {
    const activity = getValues();
    setData((prevData) => [...prevData, activity]);
    reset();
  }

  function handleActivityCheck(activity: Activity) {
    setData(prevData => {
      const index = prevData.findIndex(item => item.description === activity.description);

      if (index === -1) return prevData;

      const updatedActivity = { ...prevData[index], checked: !prevData[index].checked };
      return [...prevData.slice(0, index), updatedActivity, ...prevData.slice(index + 1)];
    });
  }


  return (
    <Background>
      <Container>
        <ContainerRegister>
          <LocationComponent>
            <MapPin size={24} color={theme.colors.grayscale.zinc_400} />
            <InputText defaultValue={"Florianópolis, Brasil"} />
          </LocationComponent>

          <form onSubmit={handleSubmit(handleAddActivity)}>
            <Input
              iconType="tag"
              placeholder={"Qual a atividade?"}
              error={errors.description?.message}
              {...register("description")}
            />

            <Input
              iconType="calendar"
              placeholder={datePlaceholder}
              error={errors.date?.message}
              {...register("date")}
            />

            <Input
              iconType="clock"
              placeholder={"08:00"}
              error={errors.time?.message}
              {...register("time")}
            />

            <Button type="submit">Salvar atividade</Button>
          </form>
        </ContainerRegister>

        <ContainerActivities>
          <TitleActivity>Atividades</TitleActivity>

          {data.length === 0 && (
            <EmptyContentMessage>
              Nenhuma atividade cadastrada.
            </EmptyContentMessage>
          )}

          {data.map((item, index) => (
            <ActivityItem
              key={index}
              checked={item.checked}
              description={item.description}
              date={item.date}
              time={item.time}
              onClick={() => handleActivityCheck(item)}
            />
          ))}
        </ContainerActivities>
      </Container>
    </Background>
  );
}
