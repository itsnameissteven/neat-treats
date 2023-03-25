type BaseProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (BaseProps<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & BaseProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type GenericComponentProps<C extends React.ElementType> = Omit<
  PolymorphicComponentProps<C>,
  'as'
>;

type PolymorphicComponent = <C extends React.ElementType = 'span'>(
  props: PolymorphicComponentProps<C>
) => React.ReactElement | null;

type PolymorphicRef<C extends React.ElementType = 'span'> =
  React.ComponentPropsWithRef<C>['ref'];

// replace with generic
type NTIcon = React.ElementType<'svg'> & {
  size?: number;
  className?: string;
  color?: string;
};

type Kebab<
  T extends string,
  A extends string = ''
> = T extends `${infer First}${infer Rest}`
  ? Kebab<
      Rest,
      `${A}${First extends Lowercase<First> ? '' : '-'}${Lowercase<First>}`
    >
  : A;

type PascalToKebab<T extends string> = T extends `${infer First}${infer Rest}`
  ? Kebab<`${Lowercase<First>}${Rest}`>
  : Kebab<T>;

type XPositions = 'left' | 'center' | 'right';
type YPositions = 'top' | 'bottom';
