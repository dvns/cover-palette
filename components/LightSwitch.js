import useDarkMode from 'use-dark-mode';
import { FiMoon, FiSun } from 'react-icons/fi';
import { StyledLightSwitch } from '../styles/LightSwitchStyles';

export default function LightSwitch({ className }) {
  const darkmode = useDarkMode(true);
  return (
    <StyledLightSwitch
      onClick={darkmode.toggle}
      className={`${darkmode.value ? 'checked' : ''} ${className || ''}`}
    >
      <div className="ripple dark"></div>
      <div className="ripple light"></div>

      <div className="toggle dark">
        <FiMoon />
      </div>
      <div className="toggle light">
        <FiSun />
      </div>
    </StyledLightSwitch>
  );
}
