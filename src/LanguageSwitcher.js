import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const ariaLabelLanguageSelector = t('aria-label-language-selector');
  const ariaLabelEnglish = t('aria-label-english');
  const ariaLabelFrench = t('aria-label-french');

  return (
    <DropdownButton
      title={currentLanguage === 'en' ? 'English' : 'Français'}
      className="ms-3 language-dropdown"
      aria-label= {ariaLabelLanguageSelector}
    >
      <Dropdown.Item
        onClick={() => changeLanguage('en')}
        active={currentLanguage === 'en'}
        aria-label={ariaLabelEnglish}
      >
        English
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage('fr')}
        active={currentLanguage === 'fr'}
        aria-label={ariaLabelFrench}
      >
        Français
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSwitcher;
