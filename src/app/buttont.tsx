'use client';

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  const onClick = async () => {
    await fetch('/api', {
      method: 'POST',
    }).then(() => {
      router.refresh()
    })
  }

  return (
    <button type="button" onClick={onClick}>Set Cookie via Route handler</button>
  )
}