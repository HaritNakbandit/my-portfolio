import styled from '@emotion/styled';

const CustomLabel = styled.p(({ theme, ...props }) => {
    return {
        color: theme.palette.text.primary,
        fontSize: props.fontSize ? props.fontSize + "px" : "16px",
        fontWeight: props.fontWeight,
        margin: 0,
    };
});

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
