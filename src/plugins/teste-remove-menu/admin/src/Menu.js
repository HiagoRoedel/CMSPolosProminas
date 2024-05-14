const removeSettingsMenu = () => {
  // Obtém a lista de itens de menu
  const menuItems = document.querySelectorAll('.leftMenu-listItem');

  // Procura pelo item de menu "Settings" e remove-o
  menuItems.forEach((menuItem) => {
    const menuItemText = menuItem.textContent.trim();
    if (menuItemText === 'settings') {
      menuItem.remove();
    }
  });
};

export default removeSettingsMenu;