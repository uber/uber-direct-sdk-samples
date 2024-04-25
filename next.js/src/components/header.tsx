import Image from "next/image";
import Link from "next/link";
import { styled } from "baseui";

const Container = styled("div", {
  padding: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #e5e7eb",
});

const Title = styled("h2", ({ $theme }) => ({
  fontSize: $theme.sizing.scale600,
  fontWeight: "bold",
}));

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Image
          src="/uber-direct.svg"
          alt="Uber Direct"
          width={160}
          height={25}
        />
      </Link>
      <Title>
        <Link href="/">JS SDK Examples</Link>
      </Title>
    </Container>
  );
};

export default Header;
