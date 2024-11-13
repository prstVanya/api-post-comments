import './Loading.css';
import { classNames } from 'utils/classNames/classNames';

interface ILoadingProps {
  className?: string
}
export const Loading = ({ className }: ILoadingProps) => {
  return (
    <div className={classNames('lds-dual-ring', {}, [className])}></div>
  )
}