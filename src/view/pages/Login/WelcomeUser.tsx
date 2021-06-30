const WelcomeUser = ({ level }: { level: string }) => {
  switch (level) {
    case "1":
      return <>Teacher, you can log in to your account.</>;
    case "2":
      return <>Administrator, you can log in to your account.</>;
    default:
      return <>Student, you can log in to your account.</>;
  }
};

export default WelcomeUser;
