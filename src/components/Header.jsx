import quizLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="logo" />
      <h1>React Quiz App</h1>
    </header>
  );
}
