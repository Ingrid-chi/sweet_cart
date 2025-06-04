// import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoCloseCircleOutline } from 'react-icons/io5';
import {
  HiOutlinePlusCircle,
  HiPlusCircle,
  HiOutlineMinusCircle,
  HiMinusCircle,
} from 'react-icons/hi';
import type { IconType } from 'react-icons';

export type IconName =
  | 'cart'
  | 'plus'
  | 'plusFilled'
  | 'minus'
  | 'minusFilled'
  | 'close';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

// 支援的 icon 集中管理
const icon: Record<IconName, IconType> = {
  cart: MdAddShoppingCart,
  plus: HiOutlinePlusCircle,
  plusFilled: HiPlusCircle,
  minus: HiOutlineMinusCircle,
  minusFilled: HiMinusCircle,
  close: IoCloseCircleOutline,
};

export const Icon = ({
  name,
  size = 20,
  color = '#333',
  className,
}: IconProps) => {
  const Component = icon[name];
  return <Component size={size} color={color} className={className} />;
};
