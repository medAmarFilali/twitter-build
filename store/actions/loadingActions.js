export const OPEN_LIGHT_LOADING = "OPEN_LIGHT_LOADING";
export const CLOSE_LIGHT_LOADING = "CLOSE_LIGHT_LOADING";

export const openLightLoading = () => {
  return {
    type: OPEN_LIGHT_LOADING,
    payload: {
      light: true,
      normal: false,
    },
  };
};

export const closeLightLoading = () => {
  return {
    type: CLOSE_LIGHT_LOADING,
    payload: {
      light: false,
      norma: false,
    },
  };
};
