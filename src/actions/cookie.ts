"use server";
import { cookies } from "next/headers";

const COOKIE_NAME = "name";
const defaultValue = "default value";

/**
 * Get user's locale from cookie
 */
export async function get() {
  if (!has()) {
    return defaultValue;
  }

  return cookies().get(COOKIE_NAME)?.value || defaultValue;
}

/**
 * Set user's locale in cookie
 * @param locale Locale
 */
export async function set(_: FormData) {
  cookies().set(COOKIE_NAME, new Date().toISOString());
}

/**
 * Check if user's locale is set in cookie
 * @returns boolean
 */
export async function has() {
  return cookies().has(COOKIE_NAME);
}
