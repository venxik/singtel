import { TouchableOpacityProps } from '../../atoms/Button';

export type CategoryProps = {
  text: string;
  isSelected: boolean;
} & TouchableOpacityProps;
