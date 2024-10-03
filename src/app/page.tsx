import { cookies } from "next/headers";
import Button from "./buttont";
import styles from "./page.module.css";

import { set, get } from '@/actions/cookie'

export default async function Home() {
  const value = get()
  const valueFromRouteHandler = cookies().get("name_route_handler")?.value || 'not set'

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <dl>
          <dt>From Server Actions</dt>
          <dd>
            {value}
          </dd>
        </dl>
        <dl>
          <dt>From Route Handler</dt>
          <dd>
            {valueFromRouteHandler}
          </dd>
        </dl>
        <form>
          <button type="submit" formAction={set}>Set Cookie via Server Action</button>
        </form>
        <Button />
      </main>
    </div>
  );
}
