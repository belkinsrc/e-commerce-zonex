declare var module: {
  hot?: {
    accept(path?: string, callback?: () => void): void;
  };
};

declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
