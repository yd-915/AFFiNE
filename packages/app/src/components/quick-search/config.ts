import { AllPagesIcon, FavouritesIcon, TrashIcon } from '@blocksuite/icons';
import { useTranslation } from '@affine/i18n';

export const useSwitchToConfig = (
  currentWorkspaceId: string
): {
  title: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}[] => {
  const { t } = useTranslation();
  const List = [
      {
      title: t('Home'),
      href: 'https://www.iftiinhub.pro/homepage',
      
    },
    {
      title: t('All pages'),
      href: currentWorkspaceId ? `/workspace/${currentWorkspaceId}/all` : '',
      icon: AllPagesIcon,
    },
    {
      title: t('Favourites'),
      href: currentWorkspaceId
        ? `/workspace/${currentWorkspaceId}/favorite`
        : '',
      icon: FavouritesIcon,
    },
    {
      title: t('Trash'),
      href: currentWorkspaceId ? `/workspace/${currentWorkspaceId}/trash` : '',
      icon: TrashIcon,
    },
  ];
  return List;
};
