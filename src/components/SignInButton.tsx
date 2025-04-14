import { useState } from 'react';
import SignInModal from './SignInModal';

export default function SignInButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Sign In
      </button>
      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
