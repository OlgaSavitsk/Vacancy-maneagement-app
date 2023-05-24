import { LinkProps } from 'core/models/header.model';
import { Paths } from './paths.constants';

export const headerLinks: LinkProps[] = [
  { path: Paths.home, label: 'Поиск Вакансий' },
  { path: Paths.favourites, label: 'Избранное' },
];
