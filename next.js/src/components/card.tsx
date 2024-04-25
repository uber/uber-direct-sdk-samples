import { Card as BaseCard } from 'baseui/card';

const Card = ({ children }) => {
  return (
    <BaseCard
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            margin: `${$theme.sizing.scale800} 0`,
            border: `1px solid ${$theme.colors.borderOpaque}`,
            boxShadow: $theme.lighting.shadow400,
          }),
        },
      }}
    >
      {children}
    </BaseCard>
  );
};

export default Card;
