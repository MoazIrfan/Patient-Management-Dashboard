import { Breadcrumbs, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BreadcrumbLink {
  label: string;
  to?: string;
}

interface BreadcrumbsNavProps {
  links: BreadcrumbLink[];  
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ links }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs separator=" / " aria-label="breadcrumb">
      {links.map((link, index) =>
        link.to ? (
          <Link
            key={index}
            onClick={() => link.to && navigate(link.to)}
            className="breadcrumb-link"
          >
            {link.label}
          </Link>
        ) : (
          <Typography key={index} color="textPrimary" aria-current="page">
            {link.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
