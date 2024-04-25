import { useStyletron, withStyle, styled } from "baseui";
import { Spinner } from "baseui/spinner";

const SpinnerBase = withStyle(Spinner, (props) => {
  const [, theme] = useStyletron();
  return {
    borderTopColor: theme.colors.primary,
  };
});

const LargeSpinner = styled(SpinnerBase, {
  width: "96px",
  height: "96px",
  borderLeftWidth: "12px",
  borderRightWidth: "12px",
  borderTopWidth: "12px",
  borderBottomWidth: "12px",
});

const SmallSpinner = styled(SpinnerBase, {
  width: "48px",
  height: "48px",
  borderLeftWidth: "6px",
  borderRightWidth: "6px",
  borderTopWidth: "6px",
  borderBottomWidth: "6px",
});

const Container = styled("div", {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  width: "100%",
  height: "100%",
});

const Loading = ({ size = "large" }) => {
  return (
    <Container>
      {size === "large" ? <LargeSpinner /> : <SmallSpinner />}
    </Container>
  );
};

export default Loading;
