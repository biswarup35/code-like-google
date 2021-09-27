import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Link as MuiLink } from "@mui/material";
interface LinksProps extends LinkProps {}

const Links: React.FunctionComponent<LinksProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <MuiLink>{children}</MuiLink>
    </Link>
  );
};

export default Links;
