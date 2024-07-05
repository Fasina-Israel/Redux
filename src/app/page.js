import Quiz from './quiz/page';
import { fuziondotonboarding } from './quiz/constants';
import Onboarding from '../app/onboarding/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Onboarding />
      </div>
    </main>
  );
}
