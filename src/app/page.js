'use client'
import Quiz from './quiz/page';
import { fuziondotonboarding } from './quiz/constants';
import Onboarding from '../../components/onboardingForm/page';
import ReduxProvider from '@/store/ReduxProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ReduxProvider>
        <Onboarding />
        </ReduxProvider>
      </div>
    </main>
  );
}
