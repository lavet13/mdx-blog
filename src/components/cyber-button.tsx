import {
  Box,
  Button,
  ButtonProps,
  useMultiStyleConfig,
  keyframes,
} from '@chakra-ui/react';

const activeGlitchAnimation = keyframes`
  0% {
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-clip-path: polygon(0 2%,100% 2%,100% 5%,0 5%);
        clip-path: polygon(0 2%,100% 2%,100% 5%,0 5%)
    }

  2% {
      -webkit-clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      -webkit-transform: translate(-5px);
      transform: translate(-5px)
  }

  6% {
      -webkit-clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      -webkit-transform: translate(5px);
      transform: translate(5px)
  }

  8% {
      -webkit-clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      -webkit-transform: translate(-5px);
      transform: translate(-5px)
  }

  9% {
      -webkit-clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      clip-path: polygon(0 78%,100% 78%,100% 100%,0 100%);
      -webkit-transform: translate(0);
      transform: translate(0)
  }

  10% {
      -webkit-clip-path: polygon(0 54%,100% 54%,100% 44%,0 44%);
      clip-path: polygon(0 54%,100% 54%,100% 44%,0 44%);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  13% {
      -webkit-clip-path: polygon(0 54%,100% 54%,100% 44%,0 44%);
      clip-path: polygon(0 54%,100% 54%,100% 44%,0 44%);
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
  }

  13.1% {
      -webkit-clip-path: polygon(0 0,0 0,0 0,0 0);
      clip-path: polygon(0 0,0 0,0 0,0 0);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  15% {
      -webkit-clip-path: polygon(0 60%,100% 60%,100% 40%,0 40%);
      clip-path: polygon(0 60%,100% 60%,100% 40%,0 40%);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  20% {
      -webkit-clip-path: polygon(0 60%,100% 60%,100% 40%,0 40%);
      clip-path: polygon(0 60%,100% 60%,100% 40%,0 40%);
      -webkit-transform: translate3d(-5px,0,0);
      transform: translate3d(-5px,0,0)
  }

  20.1% {
      -webkit-clip-path: polygon(0 0,0 0,0 0,0 0);
      clip-path: polygon(0 0,0 0,0 0,0 0);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  25% {
      -webkit-clip-path: polygon(0 85%,100% 85%,100% 40%,0 40%);
      clip-path: polygon(0 85%,100% 85%,100% 40%,0 40%);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  30% {
      -webkit-clip-path: polygon(0 85%,100% 85%,100% 40%,0 40%);
      clip-path: polygon(0 85%,100% 85%,100% 40%,0 40%);
      -webkit-transform: translate3d(-5px,0,0);
      transform: translate3d(-5px,0,0)
  }

  30.1% {
      -webkit-clip-path: polygon(0 0,0 0,0 0,0 0);
      clip-path: polygon(0 0,0 0,0 0,0 0)
  }

  35% {
      -webkit-clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      -webkit-transform: translate(-5px);
      transform: translate(-5px)
  }

  40% {
      -webkit-clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      -webkit-transform: translate(5px);
      transform: translate(5px)
  }

  45% {
      -webkit-clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      -webkit-transform: translate(-5px);
      transform: translate(-5px)
  }

  50% {
      -webkit-clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      clip-path: polygon(0 63%,100% 63%,100% 80%,0 80%);
      -webkit-transform: translate(0);
      transform: translate(0)
  }

  55% {
      -webkit-clip-path: polygon(0 10%,100% 10%,100% 0,0 0);
      clip-path: polygon(0 10%,100% 10%,100% 0,0 0);
      -webkit-transform: translate3d(5px,0,0);
      transform: translate3d(5px,0,0)
  }

  60% {
      -webkit-clip-path: polygon(0 10%,100% 10%,100% 0,0 0);
      clip-path: polygon(0 10%,100% 10%,100% 0,0 0);
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1
  }

  60.1% {
      -webkit-clip-path: polygon(0 0,0 0,0 0,0 0);
      clip-path: polygon(0 0,0 0,0 0,0 0);
      opacity: 1
  }

  to {
      -webkit-clip-path: polygon(0 0,0 0,0 0,0 0);
      clip-path: polygon(0 0,0 0,0 0,0 0);
      opacity: 1
    }
`;

const animation = keyframes`
  0% {
      clip-path: var(--clip-one);
  }
  2%, 8% {
      clip-path: var(--clip-two);
      transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
      clip-path: var(--clip-two);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
      clip-path: var(--clip-two);
      transform: translate(0, 0);
  }
  10% {
      clip-path: var(--clip-three);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
      clip-path: var(--clip-three);
      transform: translate(0, 0);
  }
  14%, 21% {
      clip-path: var(--clip-four);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
      clip-path: var(--clip-five);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
      clip-path: var(--clip-five);
      transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
      clip-path: var(--clip-six);
      transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
      clip-path: var(--clip-six);
      transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
      clip-path: var(--clip-six);
      transform: translate(0, 0);
  }
  55% {
      clip-path: var(--clip-seven);
      transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
      clip-path: var(--clip-seven);
      transform: translate(0, 0);
  }
  31%, 61%, 100% {
      clip-path: var(--clip-four);
  }
`;

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const CyberButton: FC<ButtonProps & { to?: string; }> = props => {
  const { size, variant, colorScheme, children, to, ...rest } =
    props;

  const navigate = useNavigate();

  const goTo = () => {
    navigate(to!);
  };

  const handleGoTo = () => {
    if(to) goTo();
  };

  // const activeColorScheme = partially ? 'blue' : colorScheme;

  const styles = useMultiStyleConfig(`Button`, {
    size,
    variant,
    colorScheme,
  });
  console.log({ styles });

  const glitchAnimation = `${animation} 2s infinite`;
  const activeGlitch = `${activeGlitchAnimation} infinite 1.5s cubic-bezier(0.15, 1.05, 0.76, 0.99) backwards`;

  return (
    <Button onClick={handleGoTo} role='group' __css={{ ...styles.outer }} {...rest}>
      {children}
      <span aria-hidden>_</span>
      <Box
        aria-hidden
        animation={glitchAnimation}
        display={'none'}
        as='span'
        __css={{ ...styles.glitch }}
      >
        {children}_
      </Box>

      <Box as='span' aria-hidden __css={styles.tag}>
        R25
      </Box>
    </Button>
  );
};

export default CyberButton;
