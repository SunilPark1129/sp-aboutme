const fixedOptions = { duration: 2, repeat: 0, ease: "power3.inOut" };

export const positionData = {
  Hobby: {
    camera: {
      ...fixedOptions,
      x: 1,
      y: 0,
      z: 6,
    },
    orbit: {
      ...fixedOptions,
      x: -6,
      y: -1,
      z: 3,
    },
  },

  Skill: {
    camera: {
      ...fixedOptions,
      x: -0.2,
      y: 1,
      z: -3,
    },
    orbit: {
      ...fixedOptions,
      x: -14,
      y: 0,
      z: -4,
    },
  },

  Me: {
    camera: {
      ...fixedOptions,
      x: 4,
      y: 2,
      z: -2,
    },
    orbit: {
      ...fixedOptions,
      x: -4,
      y: -2,
      z: -20,
    },
  },

  Country: {
    camera: {
      ...fixedOptions,
      x: 12,
      y: 2,
      z: -6,
    },
    orbit: {
      ...fixedOptions,
      x: -4,
      y: -2,
      z: -28,
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
