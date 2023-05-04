import { LinkProps } from 'core/models/header.model';
import { Paths } from './paths';

export const headerLinks: LinkProps[] = [
  { path: Paths.home, label: 'Поиск вакансий' },
  { path: Paths.favourites, label: 'Избранное' },
];
