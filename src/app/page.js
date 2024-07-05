import Quiz from '../app/quiz/page';
import { fuziondotonboarding } from './quiz/constants'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Quiz questions={fuziondotonboarding.questions} />
      </div>
    </main>
  );
}
