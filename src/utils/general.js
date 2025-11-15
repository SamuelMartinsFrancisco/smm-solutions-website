const joinClasses = (baseClass, customClass) => {
  if (!customClass || typeof customClass !== 'string') return baseClass; 

  return `${baseClass.trim()} ${customClass.trim()}`;
}

export { joinClasses };