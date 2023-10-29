export const generateAnimation = (delay: number, direction: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animation: Record<string, any> = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
      },
    },
  };

  animation.hidden[direction] = -60;
  animation.visible[direction] = 0;

  return animation;
};
