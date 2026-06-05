import type { ImageMetadata } from 'astro';
import bancoPopularLogo from '../../assets/logos/bank-popular.jpeg';
import connexaiLogo from '../../assets/logos/connex_one_ltd_logo.jpeg';
import geMoneyLogo from '../../assets/logos/ge-capital-bank.jpeg';
import timworksLogo from '../../assets/logos/hellotim_logo.jpeg';
import selfEmployedLogo from '../../assets/logos/self-employed.png';
import type { ExperienceLogo } from '../types/experience';

export const logoMap: Record<ExperienceLogo, ImageMetadata> = {
  '/connex_one_ltd_logo.jpeg': connexaiLogo,
  '/hellotim_logo.jpeg': timworksLogo,
  '/self-employed.png': selfEmployedLogo,
  '/bank-popular.jpeg': bancoPopularLogo,
  '/ge-capital-bank.jpeg': geMoneyLogo,
};
