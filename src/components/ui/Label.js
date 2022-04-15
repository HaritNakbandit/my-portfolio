
import styled from '@emotion/styled';

const CustomLabel = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ? props.fontSize + "px" : "16px"};
  font-weight: ${(props) => props.fontWeight};
  margin:0;
  `;

const Label = (props) => {
    const { children, color, fontSize, fontWeight, onClick } = props;

    return (
        <CustomLabel
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onClick={onClick}
        >
            {children}
        </CustomLabel>
    );
}

export default Label;
