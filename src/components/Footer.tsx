const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center text-center text-sm py-12 max-sm:text-[12px]">
      <p className="dark:text-[--foreground]">
        Copyright {currentYear} Vanta Energy Technology. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
