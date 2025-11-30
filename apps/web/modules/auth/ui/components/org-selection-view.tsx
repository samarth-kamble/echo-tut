import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectionView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/conversations"
      afterSelectOrganizationUrl="/conversations"
      hidePersonal
      skipInvitationScreen
    />
  );
};
