const Button = ({ name, isBeam = false, containerClass, onClick }) => {
  const handleClick = (e) => {
    if (name === 'Contact Me') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <button className={`btn ${containerClass}`} onClick={(e) => {handleClick(e); onClick(e)}}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
