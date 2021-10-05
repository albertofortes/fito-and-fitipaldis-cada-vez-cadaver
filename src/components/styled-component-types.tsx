interface ITheme {
  baseSeparation: number;
  bgImage: string;
  typefacePrimary: string;
  typefaceSecondary: string;
  colorSchema: {
    greenPrimary: string,
    whitePrimary: string
  };
};

export default ITheme;