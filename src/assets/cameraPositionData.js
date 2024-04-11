const fixedOptions = { duration: 2, repeat: 0, ease: "power3.inOut" };

export const positionData = {
  Hobby: {
    camera: {
      ...fixedOptions,
      x: 1,
      y: 0,
      z: 5,
    },
    orbit: {
      ...fixedOptions,
      x: -4,
      y: -1,
      z: 5,
    },
  },

  Me: {
    camera: {
      ...fixedOptions,
      x: 1,
      y: 1,
      z: -2,
    },
    orbit: {
      ...fixedOptions,
      x: -18,
      y: 0,
      z: -2.5,
    },
  },

  Skill: {
    camera: {
      ...fixedOptions,
      x: -1,
      y: 4,
      z: 2,
    },
    orbit: {
      ...fixedOptions,
      x: -1,
      y: -6,
      z: -16,
    },
  },

  Country: {
    camera: {
      ...fixedOptions,
      x: 6,
      y: 2,
      z: -2,
    },
    orbit: {
      ...fixedOptions,
      x: 8,
      y: -2,
      z: -26,
    },
  },
};

export const resetPosition = {
  camera: {
    ...fixedOptions,
    x: 28,
    y: 0,
    z: 2,
  },
  orbit: {
    ...fixedOptions,
    x: 0,
    y: 0,
    z: 0,
  },
};
