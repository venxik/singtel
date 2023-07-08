import { TouchableOpacityProps } from '../../atoms/Button';

export type QuestionItemProps = {
  text: string;
  isSelected: boolean;
} & TouchableOpacityProps;
