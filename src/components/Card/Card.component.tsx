import React from 'react';

type Props = {
  image: string;
};

export const Card: React.FC<Props> = ({ image }) => {
  return <img src={image} />;
};
