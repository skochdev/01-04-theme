import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[0]};

  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};

  :hover:not(:disabled),
  :focus:not(:disabled) {
    cursor: pointer;
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Button = ({
  // renaming the prop, so we can render it as a component.
  // Otherwise, lowercase won't render as a component
  icon: Icon = null,
  children,
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
