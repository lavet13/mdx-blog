import {
  useMultiStyleConfig,
  chakra,
  ButtonSpinner,
  omitThemingProps,
  type ButtonOptions,
  HTMLChakraProps,
  ThemingProps
} from '@chakra-ui/react';
import { FC } from 'react';
import { ButtonIcon } from './button-icon';
import { dataAttr } from '../theme/utils/attr';

interface ButtonProps
  extends HTMLChakraProps<"button">,
    ButtonOptions,
    ThemingProps<"Button"> {}

const Button: FC<ButtonProps> = props => {
  const { size, variant, colorScheme } = props;

  const styles = typeof window !== 'undefined' ? useMultiStyleConfig(`Button`, {
    size,
    variant,
    colorScheme,
  }) : {};

  const {
    isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    spinner,
    spinnerPlacement = 'start',
    color,
    ...rest
  } = omitThemingProps(props);

  const contentProps = { rightIcon, leftIcon, iconSpacing, children };

  return (
    <chakra.button
      __css={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.outer,
      }}
      disabled={isDisabled || isLoading}
      data-active={dataAttr(isActive)}
      data-loading={dataAttr(isLoading)}
      {...rest}
    >
      {isLoading && spinnerPlacement === 'start' && (
        <ButtonSpinner
          {...(color ? { color } : {})}
          className='chakra-button__spinner--start'
          label={loadingText}
          placement='start'
        >
          {spinner}
        </ButtonSpinner>
      )}

      {isLoading ? (
        loadingText || (
          <chakra.span opacity={0}>
            <ButtonContent {...contentProps} />
          </chakra.span>
        )
      ) : (
        <ButtonContent {...contentProps} />
      )}

      {isLoading && spinnerPlacement === 'end' && (
        <ButtonSpinner
          {...(color ? { color } : {})}
          className='chakra-button__spinner--end'
          label={loadingText}
          placement='end'
        >
          {spinner}
        </ButtonSpinner>
      )}
    </chakra.button>
  );
};

type ButtonContentProps = Pick<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'iconSpacing'
>;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftIcon, rightIcon, children, iconSpacing } = props;

  return (
    <>
      {leftIcon && <ButtonIcon marginEnd={iconSpacing}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && (
        <ButtonIcon marginStart={iconSpacing}>{rightIcon}</ButtonIcon>
      )}
    </>
  );
};

export default Button;
