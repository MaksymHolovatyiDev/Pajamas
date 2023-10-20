export function TitleText({dark}: {dark?: boolean}) {
  return (
    <div>
      <div className="logo__sub-container">
        <h1 className={`Main-title ${dark && 'Main-title-dark'}`}>Pajamas</h1>
        <p className={`Kit ${dark && 'Kit-dark'}`}>UI Kit</p>
      </div>
      <p className={`Sub-title ${dark && 'Sub-title-dark'}`}>
        Component library
      </p>
    </div>
  );
}
