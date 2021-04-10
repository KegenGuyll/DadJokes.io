import React, { FunctionComponent } from 'react';

interface Props {
  icon?: React.SVGProps<SVGSVGElement>;
  color?: string;
  textColor?: string;
}

const defaultProps: Props = {
  color: 'bg-blue-200',
  textColor: 'text-blue-700',
};

const Tag: FunctionComponent<Props> = ({
  icon,
  color,
  textColor,
  children,
}) => (
  <div className='mr-5'>
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1  bg-${color}-200 text-${textColor}-700 rounded-full`}>
      {icon ? <div className='mr-2'>{icon}</div> : null}
      {children}
    </div>
  </div>
);

Tag.defaultProps = defaultProps;

export default Tag;
