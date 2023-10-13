'use server';

import { currentUser } from '@clerk/nextjs';

class UserNotFoundError extends Error {}

export async function GetFormStats() {
  const user = currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }
}
