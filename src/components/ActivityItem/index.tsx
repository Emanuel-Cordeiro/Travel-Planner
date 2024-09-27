import { CheckCircle, CircleDashed } from "@phosphor-icons/react";
import {
  ActivityContainer,
  ActivityDescription,
  ActivityTime,
  ContainerItem
} from "./styles";
import theme from "../../themes";
import { formatDate } from "../../utils/formatDate";

interface ActivityItemProps {
  checked: boolean;
  description: string;
  date: string;
  time: string;
  onClick: () => void;
}

export function ActivityItem({
  checked,
  description,
  date,
  time,
  onClick
}: ActivityItemProps) {
  const { day, weekDay } = formatDate(date);
  const { colors } = theme;

  return (
    <ContainerItem onClick={onClick}>
      {checked ? (
        <CheckCircle size={20} color={colors.product.lime_300} />
      ) : (
        <CircleDashed size={20} color={colors.grayscale.zinc_400} />
      )}

      <ActivityContainer>
        <ActivityDescription>{description}</ActivityDescription>
        <ActivityTime>
          <span>{weekDay},</span> dia {day} às {time}
        </ActivityTime>
      </ActivityContainer>
    </ContainerItem>
  );
}
